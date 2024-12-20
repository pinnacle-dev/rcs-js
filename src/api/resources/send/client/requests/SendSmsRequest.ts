/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         to: "to",
 *         from: "from",
 *         text: "text"
 *     }
 */
export interface SendSmsRequest {
    /** The recipient's phone number in E.164 format (e.g., +12345678901). */
    to: string;
    /** The sender's phone number in E.164 format. Must be owned by the user. */
    from: string;
    /** The SMS message content (max 1600 characters). */
    text: string;
    /** Optional URL to receive a POST request when the message status changes. Read more about status callbacks [here](/api-reference/receive-msg-statuses). */
    statusCallback?: string;
}
