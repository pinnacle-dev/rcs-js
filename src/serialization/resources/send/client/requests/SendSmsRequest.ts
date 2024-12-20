/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Pinnacle from "../../../../../api/index";
import * as core from "../../../../../core";

export const SendSmsRequest: core.serialization.Schema<serializers.SendSmsRequest.Raw, Pinnacle.SendSmsRequest> =
    core.serialization.object({
        to: core.serialization.string(),
        from: core.serialization.string(),
        text: core.serialization.string(),
        statusCallback: core.serialization.string().optional(),
    });

export declare namespace SendSmsRequest {
    interface Raw {
        to: string;
        from: string;
        text: string;
        statusCallback?: string | null;
    }
}
