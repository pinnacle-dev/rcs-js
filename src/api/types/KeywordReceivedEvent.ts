import type { MessageEvent } from "./MessageEvent.js";

/** A keyword input handled by Pinnacle; replaces MESSAGE.RECEIVED. */
export interface KeywordReceivedEvent extends Omit<MessageEvent, "type" | "direction" | "status" | "deliveredAt"> {
    id: string;
    type: "KEYWORD.RECEIVED";
    createdAt: string;
    direction: "INBOUND";
    status: "RECEIVED";
    deliveredAt: null;
    keyword: {
        value: string;
        category: "OPT_IN" | "OPT_OUT" | "HELP";
        campaignType: "10DLC" | "TOLL_FREE" | "RCS";
        campaignId: string;
    };
    consent: { status: "OPT_IN" | "OPT_OUT" | null; applied: boolean };
    reply: {
        status: "QUEUED" | "SKIPPED" | "ERROR";
        messageId: string | null;
        type: "SMS" | "MMS" | "RCS_TEXT" | "RCS_CARDS" | null;
        text: string | null;
        mediaUrls: string[];
        reason: "NO_RESPONSE_CONFIGURED" | "STALE_EVENT" | "REPLY_ERROR" | null;
    };
}
