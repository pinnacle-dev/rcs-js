/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface RcsFallback {
    /** The sender's phone number in E.164 format. Must be owned by the user. */
    from?: string;
    /** The fallback message content (max 1600 characters). One of 'text' or 'mediaUrls' must be provided. */
    text?: string;
    /** The URLs of media to include. One of 'text' or 'mediaUrls' must be provided. `jpeg`, `jpg`, `gif`, and `png` file types are fully supported and have a size limit of 5 MB. 500 KB limit for other types. Up to 10 media URLs can be included. */
    mediaUrls?: string[];
}
