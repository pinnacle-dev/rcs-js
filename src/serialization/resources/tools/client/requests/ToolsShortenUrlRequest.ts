/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Pinnacle from "../../../../../api/index";
import * as core from "../../../../../core";

export const ToolsShortenUrlRequest: core.serialization.Schema<
    serializers.ToolsShortenUrlRequest.Raw,
    Pinnacle.ToolsShortenUrlRequest
> = core.serialization.object({
    url: core.serialization.string(),
    expiresAt: core.serialization.date().optional(),
});

export declare namespace ToolsShortenUrlRequest {
    interface Raw {
        url: string;
        expiresAt?: string | null;
    }
}
