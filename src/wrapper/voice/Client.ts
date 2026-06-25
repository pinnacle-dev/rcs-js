import type * as Pinnacle from "../../api/index.js";
import { Calls } from "../../api/resources/calls/client/Client.js";
import type { BaseClientOptions } from "../../BaseClient.js";
import {
    type VoiceReconnectOptions,
    VoiceSocket,
    type VoiceSocketConstructor,
    type VoiceSocketLike,
    type VoiceSocketOptions,
} from "./VoiceSocket.js";

const DEFAULT_RECONNECT: VoiceReconnectOptions = { enabled: true };

export interface VoiceConnectOptions {
    callId: string;
    token?: Pinnacle.CreateStreamTokenParams;
    protocols?: string | string[];
    reconnect?: VoiceReconnectOptions;
    socket?: VoiceSocketConstructor;
}

export interface VoiceConnectStreamOptions {
    protocols?: string | string[];
    reconnect?: VoiceReconnectOptions;
    socket?: VoiceSocketConstructor;
}

export interface VoiceCreateAndConnectOptions extends Pinnacle.CreateCallParams {
    token?: Pinnacle.CreateStreamTokenParams;
    protocols?: string | string[];
    reconnect?: VoiceReconnectOptions;
    socket?: VoiceSocketConstructor;
    requestOptions?: Calls.RequestOptions;
}

export interface VoiceConnection extends VoiceSocket {
    call: Pinnacle.CreatedCall;
    callId: string;
}

export class EnhancedVoice {
    private readonly calls: Calls;

    public constructor(options: BaseClientOptions) {
        this.calls = new Calls(options);
    }

    public async createAndConnect(options: VoiceCreateAndConnectOptions): Promise<VoiceConnection> {
        const { token, protocols, reconnect, socket, requestOptions, ...callParams } = options;
        const call = await this.calls.create(callParams, requestOptions);
        const connection = await this.connect({
            callId: call.id,
            token,
            protocols,
            reconnect: withDefaultReconnect(reconnect),
            socket,
        });
        connection.call = call;
        connection.callId = call.id;
        return connection as VoiceConnection;
    }

    public async connect(options: VoiceConnectOptions): Promise<VoiceSocket> {
        const token = await this.calls.createStreamToken(options.callId, options.token ?? {});
        const streamOptions: VoiceConnectStreamOptions = {};
        if (options.protocols !== undefined) {
            streamOptions.protocols = options.protocols;
        }
        if (options.socket !== undefined) {
            streamOptions.socket = options.socket;
        }
        streamOptions.reconnect = withDefaultReconnect(options.reconnect);

        const Socket = streamOptions.socket ?? (await getDefaultSocket());
        const createSocket = async (): Promise<VoiceSocketLike> => {
            const nextToken = await this.calls.createStreamToken(options.callId, options.token ?? {});
            return new Socket(nextToken.stream_url, streamOptions.protocols);
        };

        return new VoiceSocket(
            new Socket(token.stream_url, streamOptions.protocols),
            createVoiceSocketOptions(createSocket, streamOptions.reconnect),
        );
    }

    public connectStream(streamUrl: string, options: VoiceConnectStreamOptions = {}): VoiceSocket {
        const Socket = options.socket ?? getDefaultSocketSync();
        const createSocket = (): VoiceSocketLike => new Socket(streamUrl, options.protocols);
        return new VoiceSocket(createSocket(), createVoiceSocketOptions(createSocket, options.reconnect));
    }
}

function createVoiceSocketOptions(
    createSocket: () => VoiceSocketLike | Promise<VoiceSocketLike>,
    reconnect: VoiceReconnectOptions | undefined,
): VoiceSocketOptions {
    const options: VoiceSocketOptions = { createSocket };
    if (reconnect !== undefined) {
        options.reconnect = reconnect;
    }
    return options;
}

function withDefaultReconnect(reconnect: VoiceReconnectOptions | undefined): VoiceReconnectOptions {
    return { ...DEFAULT_RECONNECT, ...reconnect };
}

async function getDefaultSocket(): Promise<VoiceSocketConstructor> {
    const Socket = getGlobalSocket();
    if (Socket !== undefined) {
        return Socket;
    }

    const WsSocket = getWsSocketSync() ?? (await getWsSocket());
    if (WsSocket !== undefined) {
        return WsSocket;
    }

    throwMissingSocketError();
}

function getDefaultSocketSync(): VoiceSocketConstructor {
    const Socket = getGlobalSocket() ?? getWsSocketSync();
    if (Socket !== undefined) {
        return Socket;
    }

    throwMissingSocketError("connectStream(...) is synchronous, so older ESM Node runtimes must pass { socket }.");
}

function getGlobalSocket(): VoiceSocketConstructor | undefined {
    const Socket = globalThis.WebSocket;
    if (Socket !== undefined) {
        return Socket as VoiceSocketConstructor;
    }

    return undefined;
}

function getWsSocketSync(): VoiceSocketConstructor | undefined {
    if (typeof require !== "function") {
        return undefined;
    }

    try {
        const ws = require("ws") as { WebSocket?: VoiceSocketConstructor; default?: VoiceSocketConstructor };
        return ws.WebSocket ?? ws.default ?? (ws as unknown as VoiceSocketConstructor);
    } catch {
        return undefined;
    }
}

async function getWsSocket(): Promise<VoiceSocketConstructor | undefined> {
    try {
        const ws = (await dynamicImport("ws")) as {
            WebSocket?: VoiceSocketConstructor;
            default?: VoiceSocketConstructor;
        };
        return ws.WebSocket ?? ws.default ?? (ws as unknown as VoiceSocketConstructor);
    } catch {
        return undefined;
    }
}

function dynamicImport(specifier: string): Promise<unknown> {
    const importer = new Function("specifier", "return import(specifier)") as (specifier: string) => Promise<unknown>;
    return importer(specifier);
}

function throwMissingSocketError(detail?: string): never {
    const suffix = detail === undefined ? "" : ` ${detail}`;
    throw new Error(
        `Install "ws" to use voice WebSockets in Node, or pass { socket } to client.voice.connect(...).${suffix}`,
    );
}
