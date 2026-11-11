import { describe, it, expect, vi } from "vitest";
import { PinnacleClient } from "../../src/Client";

const categories = {
    OPT_IN: { keywords: ["JOIN"], response: "Subscribed" },
    OPT_OUT: { keywords: ["LEAVE"], response: "Unsubscribed" },
    HELP: { keywords: ["SUPPORT"], response: "Contact support@example.com" },
};
describe("keyword management", () => {
    it("sends sender overrides and all category replies through the API", async () => {
        const fetch = vi.fn(async () => Response.json({ id: "config-id" }));
        const client = new PinnacleClient({ apiKey: "test-key", fetch });
        await client.keywords.create({ campaignType: "10DLC", campaignId: "dc_1", sender: "+12025550101", categories });
        const [url, options] = fetch.mock.calls[0] as unknown as [string, RequestInit];
        expect(String(url)).toMatch(/\/keywords$/);
        expect(options.method).toBe("POST");
        expect(JSON.parse(String(options.body))).toEqual({ campaignType: "10DLC", campaignId: "dc_1", sender: "+12025550101", categories });
        expect(new Headers(options.headers).get("PINNACLE-API-KEY")).toBe("test-key");
    });
    it("supports reads, updates, deletes, effective settings, status, and history", async () => {
        const calls: Array<{ url: string; options?: RequestInit }> = [];
        const client = new PinnacleClient({ apiKey: "test-key", fetch: async (url, options) => {
            calls.push({ url: String(url), options }); return Response.json({ items: [], total: 0 });
        } });
        await client.keywords.list({ pageIndex: 2, pageSize: 10 });
        await client.keywords.get("config-id");
        await client.keywords.update("config-id", { categories });
        await client.keywords.delete("config-id");
        await client.keywords.getEffective({ sender: "+12025550101" });
        await client.keywords.listSubscriptions({ recipient: "+12025550102" });
        await client.keywords.listEvents({ campaignId: "dc_1" });
        expect(calls.map(c => c.options?.method)).toEqual(["GET", "GET", "PUT", "DELETE", "GET", "GET", "GET"]);
        expect(new URL(calls[0].url).searchParams.get("pageIndex")).toBe("2");
        expect(new URL(calls[4].url).searchParams.get("sender")).toBe("+12025550101");
        expect(new URL(calls[5].url).pathname).toBe("/keywords/subscriptions");
        expect(new URL(calls[6].url).pathname).toBe("/keywords/events");
    });
    it("preserves actionable opted-out errors", async () => {
        const client = new PinnacleClient({ apiKey: "test-key", fetch: async () => Response.json({ error: "Recipient has opted out", code: "RECIPIENT_OPTED_OUT" }, { status: 403 }) });
        await expect(client.messages.sms.send({ from: "+12025550101", to: "+12025550102", text: "Hello" })).rejects.toMatchObject({ statusCode: 403, body: { code: "RECIPIENT_OPTED_OUT" } });
    });
});

it("preserves keyword attachments in configuration requests", async () => {
    const fetch = vi.fn(async () => Response.json({ id: "kwcfg_test" }));
    const client = new PinnacleClient({ apiKey: "test-key", fetch });
    await client.keywords.create({ campaignType: "10DLC", campaignId: "dc_1", categories: {
        ...categories, HELP: { ...categories.HELP, mediaUrls: ["https://example.com/help.jpg"] },
    } });
    const [, options] = fetch.mock.calls[0] as unknown as [string, RequestInit];
    expect(JSON.parse(String(options.body)).categories.HELP.mediaUrls).toEqual(["https://example.com/help.jpg"]);
});
