/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";

export const CheckRcsCapabilityResponse: core.serialization.ObjectSchema<
    serializers.CheckRcsCapabilityResponse.Raw,
    Pinnacle.CheckRcsCapabilityResponse
> = core.serialization.object({
    success: core.serialization.boolean().optional(),
    rcsEnabled: core.serialization.boolean().optional(),
});

export declare namespace CheckRcsCapabilityResponse {
    interface Raw {
        success?: boolean | null;
        rcsEnabled?: boolean | null;
    }
}
