/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";
import { SenderMetadata } from "./SenderMetadata";
import { MessageMetadata } from "./MessageMetadata";

export const InboundMessageMetadata: core.serialization.ObjectSchema<
    serializers.InboundMessageMetadata.Raw,
    Pinnacle.InboundMessageMetadata
> = core.serialization.object({
    sender: SenderMetadata.optional(),
    message: MessageMetadata.optional(),
});

export declare namespace InboundMessageMetadata {
    interface Raw {
        sender?: SenderMetadata.Raw | null;
        message?: MessageMetadata.Raw | null;
    }
}