/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";
import { MessagePayloadMediaType } from "./MessagePayloadMediaType";
import { Action } from "./Action";
import { CardPayload } from "./CardPayload";

export const MessagePayload: core.serialization.ObjectSchema<serializers.MessagePayload.Raw, Pinnacle.MessagePayload> =
    core.serialization.object({
        text: core.serialization.string().optional(),
        mediaUrl: core.serialization.property("media_url", core.serialization.string().optional()),
        mediaType: core.serialization.property("media_type", MessagePayloadMediaType.optional()),
        quickReplies: core.serialization.property("quick_replies", core.serialization.list(Action).optional()),
        cards: core.serialization.list(CardPayload).optional(),
    });

export declare namespace MessagePayload {
    interface Raw {
        text?: string | null;
        media_url?: string | null;
        media_type?: MessagePayloadMediaType.Raw | null;
        quick_replies?: Action.Raw[] | null;
        cards?: CardPayload.Raw[] | null;
    }
}
