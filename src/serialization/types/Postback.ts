/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";

export const Postback: core.serialization.ObjectSchema<serializers.Postback.Raw, Pinnacle.Postback> =
    core.serialization.object({
        actionType: core.serialization.property("action_type", core.serialization.stringLiteral("postback")),
        title: core.serialization.string(),
        payload: core.serialization.string(),
        execute: core.serialization.string().optional(),
    });

export declare namespace Postback {
    interface Raw {
        action_type: "postback";
        title: string;
        payload: string;
        execute?: string | null;
    }
}
