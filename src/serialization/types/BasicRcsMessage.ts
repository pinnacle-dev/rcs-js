/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";

export const BasicRcsMessage: core.serialization.ObjectSchema<
    serializers.BasicRcsMessage.Raw,
    Pinnacle.BasicRcsMessage
> = core.serialization.object({
    text: core.serialization.string(),
});

export declare namespace BasicRcsMessage {
    interface Raw {
        text: string;
    }
}