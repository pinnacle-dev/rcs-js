/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Pinnacle from "../../../../api/index";
import * as core from "../../../../core";

export const ToolsUploadUrlResponse: core.serialization.ObjectSchema<
    serializers.ToolsUploadUrlResponse.Raw,
    Pinnacle.ToolsUploadUrlResponse
> = core.serialization.object({
    upload: core.serialization.string().optional(),
    download: core.serialization.string().optional(),
});

export declare namespace ToolsUploadUrlResponse {
    interface Raw {
        upload?: string | null;
        download?: string | null;
    }
}
