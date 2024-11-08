/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Pinnacle from "../../../../index";

/**
 * @example
 *     {
 *         from: "from",
 *         to: "to"
 *     }
 *
 * @example
 *     {
 *         from: "from",
 *         to: "to"
 *     }
 */
export interface Rcs {
    /**
     * The id of the RCS agent sending the message.
     *
     * Use 'test' if you want to send from the Pinnacle test agent. The test agent can only send to whitelisted test numbers.
     *
     * See https://dashboard.trypinnacle.app/settings/test-numbers to whitelist a number.
     */
    from: string;
    /** The recipient's RCS-enabled phone number in E.164 format (e.g., +12345678901). */
    to: string;
    /**
     * Text content of the message.
     *
     * Make sure you have either 'text', 'mediaUrl', or 'cards'. An error will be thrown if multiple (i.e. both 'text' and 'mediaUrl') is provided.
     */
    text?: string;
    /**
     * Media URL to be included in the message.
     *
     * Make sure you have either 'text', 'mediaUrl', or 'cards'. An error will be thrown if multiple (i.e. both 'text' and 'mediaUrl') is provided.
     */
    mediaUrl?: string;
    /**
     * List of rich cards. Maximum of 10 cards.
     *
     * Make sure you have either 'text', 'mediaUrl', or 'cards'. An error will be thrown if multiple (i.e. both 'text' and 'mediaUrl') is provided.
     */
    cards?: Pinnacle.Card[];
    /** Optional list of quick reply actions (max 10). */
    quickReplies?: Pinnacle.Action[];
    fallback?: Pinnacle.RcsFallback;
    /** Optional URL to receive a POST request when the message status changes. Read more about status callbacks [here](/api-reference/receive-msg-statuses). */
    statusCallback?: string;
}
