/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of media being sent
 */
export type MediaType = "text" | "image" | "video" | "audio" | "file";

export const MediaType = {
    Text: "text",
    Image: "image",
    Video: "video",
    Audio: "audio",
    File: "file",
} as const;