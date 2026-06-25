import {
    type VoiceAudioPlayCommandParams,
    type VoiceAudioReduceNoiseCommandParams,
    type VoiceCallAnswerCommandParams,
    type VoiceCallEndCommandParams,
    type VoiceCallTransferCommandParams,
    type VoiceCallUpdateStateCommandParams,
    type VoiceClientFrame,
    type VoiceClientMedia,
    type VoiceCommandAckFrame,
    VoiceCommandAction,
    type VoiceCommandFrame,
    type VoiceDtmfSendCommandParams,
    type VoiceInputGetCommandParams,
    type VoiceServerFrame,
} from "./types.js";
import type * as Pinnacle from "../../api/index.js";

export interface VoiceSocketLike {
    readonly readyState: number;
    send(data: string): void;
    close(code?: number, reason?: string): void;
    addEventListener?: (type: string, listener: (event: unknown) => void) => void;
    removeEventListener?: (type: string, listener: (event: unknown) => void) => void;
    onopen?: ((event: unknown) => void) | null;
    onmessage?: ((event: { data: unknown }) => void) | null;
    onerror?: ((event: unknown) => void) | null;
    onclose?: ((event: unknown) => void) | null;
}

export type VoiceSocketConstructor = new (url: string, protocols?: string | string[]) => VoiceSocketLike;

export type VoiceSocketFactory = () => VoiceSocketLike | Promise<VoiceSocketLike>;

export interface VoiceReconnectOptions {
    enabled?: boolean;
    maxAttempts?: number;
    initialDelayMs?: number;
    maxDelayMs?: number;
    backoffMultiplier?: number;
}

export interface VoiceSocketOptions {
    createSocket?: VoiceSocketFactory;
    reconnect?: VoiceReconnectOptions;
}

export interface VoiceReconnectEvent {
    attempt: number;
    delayMs: number;
}

export type VoiceEvent =
    | "open"
    | "close"
    | "error"
    | "frame"
    | "ack"
    | "event"
    | "media"
    | "reconnecting"
    | "reconnected";

export interface VoiceEvents {
    open: unknown;
    close: unknown;
    error: unknown;
    frame: VoiceServerFrame;
    ack: VoiceCommandAckFrame;
    event: Extract<VoiceServerFrame, { event: "event" }>;
    media: Extract<VoiceServerFrame, { event: "media" }>;
    reconnecting: VoiceReconnectEvent;
    reconnected: VoiceSocketLike;
}

export interface VoiceAckOptions {
    timeoutMs?: number;
}

export class VoiceSocket {
    public call: Pinnacle.CreatedCall | undefined;
    public callId: string | undefined;

    private socket_: VoiceSocketLike;
    private readonly createSocket: VoiceSocketFactory | undefined;
    private readonly reconnect: Required<VoiceReconnectOptions>;
    private readonly listeners = new Map<VoiceEvent, Set<(payload: unknown) => void>>();
    private readonly pendingAcks = new Map<
        string,
        {
            resolve: (ack: VoiceCommandAckFrame) => void;
            reject: (error: Error) => void;
            timeout: ReturnType<typeof setTimeout> | undefined;
        }
    >();
    private closedByUser = false;
    private reconnectAttempts = 0;
    private reconnectTimer: ReturnType<typeof setTimeout> | undefined;
    private reconnectPromise: Promise<this> | undefined;

    public constructor(socket: VoiceSocketLike, options: VoiceSocketOptions = {}) {
        this.socket_ = socket;
        this.createSocket = options.createSocket;
        this.reconnect = normalizeReconnectOptions(options.reconnect);
        this.bindSocket();
    }

    public get socket(): VoiceSocketLike {
        return this.socket_;
    }

    public get readyState(): number {
        return this.socket.readyState;
    }

    public get isOpen(): boolean {
        return this.socket.readyState === 1;
    }

    public waitUntilOpen(timeoutMs = 10_000): Promise<void> {
        if (this.isOpen) {
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            const timeout =
                timeoutMs > 0
                    ? setTimeout(() => {
                          cleanup();
                          reject(new Error("Timed out waiting for voice socket to open."));
                      }, timeoutMs)
                    : undefined;
            const cleanup = (): void => {
                if (timeout !== undefined) {
                    clearTimeout(timeout);
                }
                offOpen();
                offClose();
                offError();
            };
            const offOpen = this.on("open", () => {
                cleanup();
                resolve();
            });
            const offClose = this.on("close", () => {
                cleanup();
                reject(new Error("Voice socket closed before opening."));
            });
            const offError = this.on("error", (error) => {
                cleanup();
                reject(toError(error));
            });
        });
    }

    public async connect(): Promise<void> {
        await this.waitUntilOpen();
    }

    private bindSocket(): void {
        this.bind("open", (event) => this.emit("open", event));
        this.bind("close", (event) => {
            this.rejectPendingAcks(new Error("Voice socket closed before an ack was received."));
            this.emit("close", event);
            this.scheduleReconnect();
        });
        this.bind("error", (event) => this.emit("error", event));
        this.bind("message", (event: unknown) => this.handleMessage((event as { data: unknown }).data));
    }

    public on<Event extends VoiceEvent>(event: Event, listener: (payload: VoiceEvents[Event]) => void): () => void {
        const listeners = this.listeners.get(event) ?? new Set();
        listeners.add(listener as (payload: unknown) => void);
        this.listeners.set(event, listeners);
        return () => {
            listeners.delete(listener as (payload: unknown) => void);
            if (listeners.size === 0) {
                this.listeners.delete(event);
            }
        };
    }

    public send(frame: VoiceClientFrame): void {
        this.socket.send(JSON.stringify(frame));
    }

    public command(frame: VoiceCommandFrame): string {
        this.send(frame);
        return frame.command_id;
    }

    public async commandAndWait(
        frame: VoiceCommandFrame,
        options: VoiceAckOptions = {},
    ): Promise<VoiceCommandAckFrame> {
        const ack = this.waitForAck(frame.command_id, options);
        this.command(frame);
        return ack;
    }

    public answer(params?: VoiceCallAnswerCommandParams, commandId: string = createVoiceCommandId()): string {
        return this.command(
            withOptionalParams({ event: "command", command_id: commandId, action: "call.answer" }, params),
        );
    }

    public end(params?: VoiceCallEndCommandParams, commandId: string = createVoiceCommandId()): string {
        return this.command(
            withOptionalParams({ event: "command", command_id: commandId, action: "call.end" }, params),
        );
    }

    public transfer(params: VoiceCallTransferCommandParams, commandId: string = createVoiceCommandId()): string {
        return this.command({
            event: "command",
            command_id: commandId,
            action: VoiceCommandAction.CallTransfer,
            params,
        });
    }

    public startRecording(commandId: string = createVoiceCommandId()): string {
        return this.command({
            event: "command",
            command_id: commandId,
            action: VoiceCommandAction.RecordingStart,
        });
    }

    public stopRecording(commandId: string = createVoiceCommandId()): string {
        return this.command({
            event: "command",
            command_id: commandId,
            action: VoiceCommandAction.RecordingStop,
        });
    }

    public playAudio(params: VoiceAudioPlayCommandParams, commandId: string = createVoiceCommandId()): string {
        return this.command({
            event: "command",
            command_id: commandId,
            action: VoiceCommandAction.AudioPlay,
            params,
        });
    }

    public stopAudio(commandId: string = createVoiceCommandId()): string {
        return this.command({
            event: "command",
            command_id: commandId,
            action: VoiceCommandAction.AudioStop,
        });
    }

    public reduceNoise(params: VoiceAudioReduceNoiseCommandParams, commandId: string = createVoiceCommandId()): string {
        return this.command({
            event: "command",
            command_id: commandId,
            action: VoiceCommandAction.AudioReduceNoise,
            params,
        });
    }

    public getInput(params?: VoiceInputGetCommandParams, commandId: string = createVoiceCommandId()): string {
        return this.command(
            withOptionalParams({ event: "command", command_id: commandId, action: "input.get" }, params),
        );
    }

    public cancelInput(commandId: string = createVoiceCommandId()): string {
        return this.command({
            event: "command",
            command_id: commandId,
            action: VoiceCommandAction.InputCancel,
        });
    }

    public sendDtmf(params: VoiceDtmfSendCommandParams, commandId: string = createVoiceCommandId()): string {
        return this.command({
            event: "command",
            command_id: commandId,
            action: VoiceCommandAction.DtmfSend,
            params,
        });
    }

    public updateState(params: VoiceCallUpdateStateCommandParams, commandId: string = createVoiceCommandId()): string {
        return this.command({
            event: "command",
            command_id: commandId,
            action: VoiceCommandAction.CallUpdateState,
            params,
        });
    }

    public sendMedia(media: VoiceClientMedia): void {
        this.send({ event: "media", media });
    }

    public waitForAck(commandId: string, options: VoiceAckOptions = {}): Promise<VoiceCommandAckFrame> {
        const existing = this.pendingAcks.get(commandId);
        if (existing !== undefined) {
            throw new Error(`Already waiting for ack ${commandId}.`);
        }

        return new Promise((resolve, reject) => {
            const timeoutMs = options.timeoutMs ?? 10_000;
            const pending = {
                resolve,
                reject,
                timeout:
                    timeoutMs > 0
                        ? setTimeout(() => {
                              this.pendingAcks.delete(commandId);
                              reject(new Error(`Timed out waiting for ack ${commandId}.`));
                          }, timeoutMs)
                        : undefined,
            };
            this.pendingAcks.set(commandId, pending);
        });
    }

    public close(code?: number, reason?: string): void {
        this.closedByUser = true;
        if (this.reconnectTimer !== undefined) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimer = undefined;
        }
        this.socket.close(code, reason);
    }

    public async reconnectNow(): Promise<this> {
        if (this.createSocket === undefined) {
            throw new Error("Voice socket was not configured with a reconnect factory.");
        }
        if (this.reconnectPromise !== undefined) {
            return this.reconnectPromise;
        }

        this.reconnectPromise = Promise.resolve()
            .then(() => this.createSocket?.())
            .then((socket) => {
                if (socket === undefined) {
                    throw new Error("Voice socket reconnect factory did not return a socket.");
                }
                this.closedByUser = false;
                this.socket_ = socket;
                this.bindSocket();
                this.reconnectAttempts = 0;
                this.emit("reconnected", socket);
                return this;
            })
            .finally(() => {
                this.reconnectPromise = undefined;
            });

        return this.reconnectPromise;
    }

    private bind(type: string, listener: (event: unknown) => void): void {
        if (this.socket.addEventListener !== undefined) {
            this.socket.addEventListener(type, listener);
            return;
        }

        if (type === "open") {
            this.socket.onopen = listener;
        } else if (type === "message") {
            this.socket.onmessage = listener;
        } else if (type === "error") {
            this.socket.onerror = listener;
        } else if (type === "close") {
            this.socket.onclose = listener;
        }
    }

    private handleMessage(data: unknown): void {
        try {
            const frame = parseVoiceFrame(data);
            this.emit("frame", frame);

            if (frame.event === "ack") {
                this.resolvePendingAck(frame);
                this.emit("ack", frame);
            } else if (frame.event === "event") {
                this.emit("event", frame);
            } else if (frame.event === "media") {
                this.emit("media", frame);
            } else if (frame.event === "connected") {
                return;
            } else {
                throw new Error("Voice socket received an unknown frame event.");
            }
        } catch (error) {
            this.emit("error", error);
        }
    }

    private resolvePendingAck(ack: VoiceCommandAckFrame): void {
        const pending = this.pendingAcks.get(ack.command_id);
        if (pending === undefined) {
            return;
        }

        this.pendingAcks.delete(ack.command_id);
        if (pending.timeout !== undefined) {
            clearTimeout(pending.timeout);
        }
        pending.resolve(ack);
    }

    private rejectPendingAcks(error: Error): void {
        for (const [commandId, pending] of this.pendingAcks.entries()) {
            this.pendingAcks.delete(commandId);
            if (pending.timeout !== undefined) {
                clearTimeout(pending.timeout);
            }
            pending.reject(error);
        }
    }

    private emit<Event extends VoiceEvent>(event: Event, payload: VoiceEvents[Event]): void {
        for (const listener of this.listeners.get(event) ?? []) {
            listener(payload);
        }
    }

    private scheduleReconnect(): void {
        if (this.closedByUser || !this.reconnect.enabled || this.createSocket === undefined) {
            return;
        }
        if (this.reconnectTimer !== undefined || this.reconnectPromise !== undefined) {
            return;
        }
        if (this.reconnectAttempts >= this.reconnect.maxAttempts) {
            this.emit("error", new Error("Voice socket reconnect attempts exhausted."));
            return;
        }

        this.reconnectAttempts += 1;
        const delayMs = getReconnectDelay(this.reconnect, this.reconnectAttempts);
        this.emit("reconnecting", { attempt: this.reconnectAttempts, delayMs });
        this.reconnectTimer = setTimeout(() => {
            this.reconnectTimer = undefined;
            void this.reconnectNow().catch((error) => {
                this.emit("error", error);
                this.scheduleReconnect();
            });
        }, delayMs);
    }
}

export function createVoiceCommandId(): string {
    const random =
        typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
    return `cmd_${random}`;
}

function parseVoiceFrame(data: unknown): VoiceServerFrame {
    if (typeof data !== "string") {
        throw new Error("Voice socket received a non-string frame.");
    }
    return JSON.parse(data) as VoiceServerFrame;
}

function withOptionalParams<Frame extends Omit<VoiceCommandFrame, "params">, Params>(
    frame: Frame,
    params: Params | undefined,
): Frame | (Frame & { params: Params }) {
    if (params === undefined) {
        return frame;
    }
    return { ...frame, params };
}

function normalizeReconnectOptions(options: VoiceReconnectOptions = {}): Required<VoiceReconnectOptions> {
    return {
        enabled: options.enabled ?? false,
        maxAttempts: options.maxAttempts ?? 5,
        initialDelayMs: options.initialDelayMs ?? 250,
        maxDelayMs: options.maxDelayMs ?? 5_000,
        backoffMultiplier: options.backoffMultiplier ?? 2,
    };
}

function getReconnectDelay(options: Required<VoiceReconnectOptions>, attempt: number): number {
    return Math.min(options.initialDelayMs * options.backoffMultiplier ** Math.max(0, attempt - 1), options.maxDelayMs);
}

function toError(error: unknown): Error {
    return error instanceof Error ? error : new Error("Voice socket error.");
}
