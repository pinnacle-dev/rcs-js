/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";

export const MessageMetadata: core.serialization.ObjectSchema<
    serializers.MessageMetadata.Raw,
    Pinnacle.MessageMetadata
> = core.serialization.object({
    timestamp: core.serialization.date(),
});

export declare namespace MessageMetadata {
    interface Raw {
        timestamp: string;
    }
}
