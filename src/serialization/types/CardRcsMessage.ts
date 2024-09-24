/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";
import { Card } from "./Card";
import { Action } from "./Action";

export const CardRcsMessage: core.serialization.ObjectSchema<serializers.CardRcsMessage.Raw, Pinnacle.CardRcsMessage> =
    core.serialization.object({
        cards: core.serialization.list(Card),
        quickReplies: core.serialization.property("quick_replies", core.serialization.list(Action).optional()),
    });

export declare namespace CardRcsMessage {
    interface Raw {
        cards: Card.Raw[];
        quick_replies?: Action.Raw[] | null;
    }
}