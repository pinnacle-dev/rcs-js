/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";
import { Action } from "./Action";

export const Card: core.serialization.ObjectSchema<serializers.Card.Raw, Pinnacle.Card> = core.serialization.object({
    title: core.serialization.string(),
    subtitle: core.serialization.string().optional(),
    mediaUrl: core.serialization.string().optional(),
    buttons: core.serialization.list(Action).optional(),
});

export declare namespace Card {
    interface Raw {
        title: string;
        subtitle?: string | null;
        mediaUrl?: string | null;
        buttons?: Action.Raw[] | null;
    }
}
