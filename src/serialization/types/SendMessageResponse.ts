/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";

export const SendMessageResponse: core.serialization.ObjectSchema<
    serializers.SendMessageResponse.Raw,
    Pinnacle.SendMessageResponse
> = core.serialization.object({
    message: core.serialization.string().optional(),
});

export declare namespace SendMessageResponse {
    interface Raw {
        message?: string | null;
    }
}
