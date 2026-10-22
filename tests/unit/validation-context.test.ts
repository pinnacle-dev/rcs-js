import { describe, expect, it, vi } from "vitest";
import { PinnacleClient } from "../../src/wrapper/PinnacleClient.js";

describe("validation context serialization", () => {
    it.each(["INBOUND", "OUTBOUND"] as const)("forwards SMS %s pricing context and keeps the response", async (direction) => {
        const response = { unit: 0.006, total: { gsm7: 0.006, utf16: 0.006 }, segments: {}, pricingContext: { status: "RESOLVED", category: "SMS_10DLC", direction } };
        const fetch = vi.fn().mockResolvedValue(new Response(JSON.stringify(response), { status: 200 }));
        const client = new PinnacleClient({ apiKey: "test-key", fetch });
        const request = { text: "Hello", sender: "+14155550123", direction };
        const result = await client.messages.sms.validate(request);
        expect(JSON.parse(fetch.mock.calls[0][1].body)).toEqual(request);
        expect(result.pricingContext?.status).toBe("RESOLVED");
        expect(result.unit).toBe(0.006);
    });
    it("preserves legacy SMS calls", async () => {
        const fetch = vi.fn().mockResolvedValue(new Response(JSON.stringify({ unit: 0.015, total: {}, segments: {} }), { status: 200 }));
        await new PinnacleClient({ apiKey: "test-key", fetch }).messages.sms.validate({ text: "Hello" });
        expect(JSON.parse(fetch.mock.calls[0][1].body)).toEqual({ text: "Hello" });
    });
    it.each([{ text: "Hello" }, { media: "https://example.com/a.png" }, { cards: [{ title: "Hello" }] }])("forwards RCS content and context", async (content) => {
        const fetch = vi.fn().mockResolvedValue(new Response(JSON.stringify({ unit: 0.003, total: 0.003, segments: 1 }), { status: 200 }));
        const request = { ...content, sender: "agent_example", direction: "INBOUND" as const };
        await new PinnacleClient({ apiKey: "test-key", fetch }).messages.rcs.validate(request);
        expect(JSON.parse(fetch.mock.calls[0][1].body)).toEqual(request);
    });
});
