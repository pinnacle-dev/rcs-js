/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../index";
import * as Pinnacle from "../../../api/index";
import * as core from "../../../core";

export const UpdateSettingsRequest: core.serialization.Schema<
    serializers.UpdateSettingsRequest.Raw,
    Pinnacle.UpdateSettingsRequest
> = core.serialization.object({
    webhookUrl: core.serialization.property("webhook_url", core.serialization.string()),
});

export declare namespace UpdateSettingsRequest {
    interface Raw {
        webhook_url: string;
    }
}
