import { describe, expect, it } from "vitest";
import {
    type CallStatusEvent,
    PinnacleClient,
    type VoiceClientFrame,
    VoiceCommandAction,
    type VoiceCommandFrame,
    VoiceMediaTrack,
    VoiceNoiseReductionDirection,
    type VoiceServerFrame,
    VoiceSocket,
} from "../src/index.js";

describe("voice socket custom types", () => {
    it("processes call status webhooks as typed events", async () => {
        const client = new PinnacleClient({ token: "test" });
        const event = await client.messages.process(
            {
                headers: { "PINNACLE-SIGNING-SECRET": "secret" },
                body: {
                    type: "CALL.STATUS",
                    sender: "+15551112222",
                    call: {
                        id: "call_123",
                        from: "+15551112222",
                        to: "+15551113333",
                        direction: "OUTBOUND",
                        status: "ANSWERED",
                    },
                },
            },
            "secret",
        );

        const callEvent: CallStatusEvent = event as CallStatusEvent;
        expect(callEvent.type).toBe("CALL.STATUS");
        expect(callEvent.call.status).toBe("ANSWERED");
    });

    it("exports command constants for every developer command", () => {
        expect(Object.values(VoiceCommandAction)).toEqual([
            "call.answer",
            "call.end",
            "call.transfer",
            "recording.start",
            "recording.stop",
            "audio.play",
            "audio.stop",
            "audio.reduce_noise",
            "input.get",
            "input.cancel",
            "dtmf.send",
            "call.update_state",
        ]);
    });

    it("types command frames for call, recording, audio, input, dtmf, and metadata updates", () => {
        const frames: VoiceCommandFrame[] = [
            { event: "command", command_id: "answer", action: "call.answer", params: { as: "Ivan" } },
            { event: "command", command_id: "end", action: "call.end", params: { cause: "user_busy" } },
            {
                event: "command",
                command_id: "dial",
                action: "call.transfer",
                params: { to: "+15555550100", from: "+15555550101", as: "Ivan" },
            },
            {
                event: "command",
                command_id: "bridge",
                action: "call.transfer",
                params: { call_id: "call_abc123", as: "Support" },
            },
            { event: "command", command_id: "rec-start", action: "recording.start" },
            { event: "command", command_id: "rec-stop", action: "recording.stop" },
            {
                event: "command",
                command_id: "play-url",
                action: "audio.play",
                params: { url: "https://example.com/tone.wav" },
            },
            {
                event: "command",
                command_id: "play-tts",
                action: "audio.play",
                params: { text: "Hello", voice: "alloy" },
            },
            { event: "command", command_id: "stop", action: "audio.stop" },
            {
                event: "command",
                command_id: "noise",
                action: "audio.reduce_noise",
                params: { enabled: true, direction: VoiceNoiseReductionDirection.Both },
            },
            {
                event: "command",
                command_id: "input",
                action: "input.get",
                params: { maxDigits: 6, terminatingDigit: "#" },
            },
            { event: "command", command_id: "cancel-input", action: "input.cancel" },
            {
                event: "command",
                command_id: "dtmf",
                action: "dtmf.send",
                params: { digits: "1234#", duration_ms: 250 },
            },
            {
                event: "command",
                command_id: "state",
                action: "call.update_state",
                params: { metadata: { customer_id: "cus_123" } },
            },
        ];

        expect(frames.map((frame) => frame.action)).toContain("call.transfer");
    });

    it("types bidirectional media and server frames", () => {
        const outboundAudio: VoiceClientFrame = {
            event: "media",
            media: {
                track: VoiceMediaTrack.Outbound,
                payload: "base64-pcm",
                chunk: 1,
                timestamp: "2026-06-17T22:00:00.000Z",
            },
        };

        const inboundAudio: VoiceServerFrame = {
            event: "media",
            stream_sid: "stream_123",
            sequence_number: 42,
            media: {
                track: VoiceMediaTrack.Inbound,
                payload: "base64-pcm",
            },
        };

        const ack: VoiceServerFrame = {
            event: "ack",
            command_id: "cmd_123",
            action: VoiceCommandAction.AudioPlay,
            status: "ok",
        };

        expect(outboundAudio.media.track).toBe("outbound");
        expect(inboundAudio.media.track).toBe("inbound");
        expect(ack.status).toBe("ok");
    });

    it("connects a stream with an injected socket implementation", () => {
        const client = new PinnacleClient({ token: "test" });
        const socket = client.voice.connectStream("wss://voice.example.test/stream", {
            socket: FakeSocket,
            protocols: "voice.v1",
        });

        expect(socket).toBeInstanceOf(VoiceSocket);
        expect(FakeSocket.last?.url).toBe("wss://voice.example.test/stream");
        expect(FakeSocket.last?.protocols).toBe("voice.v1");
    });

    it("serializes command and media helpers exactly as the gateway expects", () => {
        const socket = new VoiceSocket(new FakeSocket("wss://voice.example.test/stream"));

        socket.answer({ as: "Agent" }, "cmd_answer");
        socket.transfer({ call_id: "call_target", as: "Support" }, "cmd_bridge");
        socket.playAudio({ text: "Please hold", voice: "alloy" }, "cmd_play");
        socket.reduceNoise({ enabled: true, direction: VoiceNoiseReductionDirection.Both }, "cmd_noise");
        socket.getInput({ maxDigits: 4, terminatingDigit: "#" }, "cmd_input");
        socket.sendDtmf({ digits: "1234#", duration_ms: 250 }, "cmd_dtmf");
        socket.updateState({ metadata: { customer_id: "cus_123" } }, "cmd_state");
        socket.sendMedia({ track: VoiceMediaTrack.Outbound, payload: "base64-pcm", chunk: 7 });

        expect(FakeSocket.last?.sent.map((payload) => JSON.parse(payload))).toEqual([
            { event: "command", command_id: "cmd_answer", action: "call.answer", params: { as: "Agent" } },
            {
                event: "command",
                command_id: "cmd_bridge",
                action: "call.transfer",
                params: { call_id: "call_target", as: "Support" },
            },
            {
                event: "command",
                command_id: "cmd_play",
                action: "audio.play",
                params: { text: "Please hold", voice: "alloy" },
            },
            {
                event: "command",
                command_id: "cmd_noise",
                action: "audio.reduce_noise",
                params: { enabled: true, direction: "both" },
            },
            {
                event: "command",
                command_id: "cmd_input",
                action: "input.get",
                params: { maxDigits: 4, terminatingDigit: "#" },
            },
            {
                event: "command",
                command_id: "cmd_dtmf",
                action: "dtmf.send",
                params: { digits: "1234#", duration_ms: 250 },
            },
            {
                event: "command",
                command_id: "cmd_state",
                action: "call.update_state",
                params: { metadata: { customer_id: "cus_123" } },
            },
            { event: "media", media: { track: "outbound", payload: "base64-pcm", chunk: 7 } },
        ]);
    });

    it("routes server frames and resolves pending command acks", async () => {
        const fake = new FakeSocket("wss://voice.example.test/stream");
        const socket = new VoiceSocket(fake);
        const frames: VoiceServerFrame[] = [];
        const events: VoiceServerFrame[] = [];
        const media: VoiceServerFrame[] = [];

        socket.on("frame", (frame) => frames.push(frame));
        socket.on("event", (frame) => events.push(frame));
        socket.on("media", (frame) => media.push(frame));

        const ack = socket.commandAndWait(
            { event: "command", command_id: "cmd_wait", action: "audio.stop" },
            { timeoutMs: 100 },
        );

        fake.emitMessage({
            event: "event",
            type: "call.answered",
            stream_sid: "stream_123",
            sequence_number: 1,
            payload: { call_id: "call_123" },
        });
        fake.emitMessage({
            event: "media",
            stream_sid: "stream_123",
            sequence_number: 2,
            media: { track: "inbound", payload: "base64-pcm" },
        });
        fake.emitMessage({
            event: "ack",
            command_id: "cmd_wait",
            action: "audio.stop",
            status: "ok",
        });

        await expect(ack).resolves.toMatchObject({ command_id: "cmd_wait", status: "ok" });
        expect(frames).toHaveLength(3);
        expect(events).toHaveLength(1);
        expect(media).toHaveLength(1);
    });

    it("surfaces invalid server frames through the error listener", () => {
        const fake = new FakeSocket("wss://voice.example.test/stream");
        const socket = new VoiceSocket(fake);
        const errors: unknown[] = [];

        socket.on("error", (error) => errors.push(error));
        fake.emitRawMessage("{");

        expect(errors[0]).toBeInstanceOf(Error);
    });

    it("waits for open and supports manual reconnect", async () => {
        const first = new FakeSocket("wss://voice.example.test/first");
        first.readyState = 0;
        const socket = new VoiceSocket(first, {
            createSocket: () => new FakeSocket("wss://voice.example.test/second"),
        });

        const opened = socket.waitUntilOpen(100);
        first.open();
        await expect(opened).resolves.toBeUndefined();

        await socket.reconnectNow();
        expect(socket.socket).toBe(FakeSocket.last);
        expect(FakeSocket.last?.url).toBe("wss://voice.example.test/second");
    });

    it("auto reconnects fixed stream URLs when enabled", async () => {
        FakeSocket.instances = [];
        const client = new PinnacleClient({ token: "test" });
        const socket = client.voice.connectStream("wss://voice.example.test/fixed", {
            socket: FakeSocket,
            reconnect: { enabled: true, initialDelayMs: 1, maxAttempts: 2 },
        });

        const reconnected = new Promise((resolve) => socket.on("reconnected", resolve));
        FakeSocket.instances[0]?.close();
        await reconnected;

        expect(FakeSocket.instances).toHaveLength(2);
        expect(FakeSocket.instances[0]?.url).toBe("wss://voice.example.test/fixed");
        expect(FakeSocket.instances[1]?.url).toBe("wss://voice.example.test/fixed");
    });

    it("refreshes stream tokens when reconnecting call streams", async () => {
        FakeSocket.instances = [];
        const streamUrls = ["wss://voice.example.test/token-1", "wss://voice.example.test/token-2"];
        let tokenRequests = 0;
        const client = new PinnacleClient({
            token: "test",
            baseUrl: "https://api.example.test",
            fetch: async (input, init) => {
                expect(String(input)).toBe("https://api.example.test/calls/call_123/stream-token");
                expect(init?.method).toBe("POST");
                const stream_url = streamUrls[tokenRequests];
                tokenRequests += 1;
                return new Response(JSON.stringify({ token: `token-${tokenRequests}`, stream_url }), {
                    status: 200,
                    headers: { "content-type": "application/json" },
                });
            },
        });

        const socket = await client.voice.connect({
            callId: "call_123",
            socket: FakeSocket,
            reconnect: { enabled: true, initialDelayMs: 1, maxAttempts: 2 },
        });
        const reconnected = new Promise((resolve) => socket.on("reconnected", resolve));

        FakeSocket.instances[0]?.close();
        await reconnected;

        expect(tokenRequests).toBe(2);
        expect(FakeSocket.instances.map((ws) => ws.url)).toEqual(streamUrls);
    });
});

class FakeSocket {
    public static last: FakeSocket | undefined;
    public static instances: FakeSocket[] = [];
    public readonly sent: string[] = [];
    public readonly listeners = new Map<string, Set<(event: unknown) => void>>();
    public readyState = 1;

    public constructor(
        public readonly url: string,
        public readonly protocols?: string | string[],
    ) {
        FakeSocket.last = this;
        FakeSocket.instances.push(this);
    }

    public send(data: string): void {
        this.sent.push(data);
    }

    public close(): void {
        this.readyState = 3;
        this.emit("close", {});
    }

    public open(): void {
        this.readyState = 1;
        this.emit("open", {});
    }

    public addEventListener(type: string, listener: (event: unknown) => void): void {
        const listeners = this.listeners.get(type) ?? new Set();
        listeners.add(listener);
        this.listeners.set(type, listeners);
    }

    public removeEventListener(type: string, listener: (event: unknown) => void): void {
        const listeners = this.listeners.get(type);
        listeners?.delete(listener);
    }

    public emitMessage(frame: VoiceServerFrame): void {
        this.emitRawMessage(JSON.stringify(frame));
    }

    public emitRawMessage(data: string): void {
        this.emit("message", { data });
    }

    private emit(type: string, event: unknown): void {
        for (const listener of this.listeners.get(type) ?? []) {
            listener(event);
        }
    }
}
