import { describe, expect, it } from "vitest";
import {
    VoiceCommandAction,
    VoiceMediaTrack,
    VoiceNoiseReductionDirection,
    type VoiceClientFrame,
    type VoiceCommandFrame,
    type VoiceServerFrame,
} from "../src/index.js";

describe("voice websocket custom types", () => {
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
            { event: "command", command_id: "play-url", action: "audio.play", params: { url: "https://example.com/tone.wav" } },
            { event: "command", command_id: "play-tts", action: "audio.play", params: { text: "Hello", voice: "alloy" } },
            { event: "command", command_id: "stop", action: "audio.stop" },
            {
                event: "command",
                command_id: "noise",
                action: "audio.reduce_noise",
                params: { enabled: true, direction: VoiceNoiseReductionDirection.Both },
            },
            { event: "command", command_id: "input", action: "input.get", params: { maxDigits: 6, terminatingDigit: "#" } },
            { event: "command", command_id: "cancel-input", action: "input.cancel" },
            { event: "command", command_id: "dtmf", action: "dtmf.send", params: { digits: "1234#", duration_ms: 250 } },
            { event: "command", command_id: "state", action: "call.update_state", params: { metadata: { customer_id: "cus_123" } } },
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
});
