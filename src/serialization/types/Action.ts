/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";
import { ActionType } from "./ActionType";
import { ActionLatLong } from "./ActionLatLong";

export const Action: core.serialization.ObjectSchema<serializers.Action.Raw, Pinnacle.Action> =
    core.serialization.object({
        title: core.serialization.string().optional(),
        type: ActionType.optional(),
        payload: core.serialization.string().optional(),
        metadata: core.serialization.string().optional(),
        eventStartTime: core.serialization.string().optional(),
        eventEndTime: core.serialization.string().optional(),
        eventTitle: core.serialization.string().optional(),
        eventDescription: core.serialization.string().optional(),
        latLong: ActionLatLong.optional(),
    });

export declare namespace Action {
    interface Raw {
        title?: string | null;
        type?: ActionType.Raw | null;
        payload?: string | null;
        metadata?: string | null;
        eventStartTime?: string | null;
        eventEndTime?: string | null;
        eventTitle?: string | null;
        eventDescription?: string | null;
        latLong?: ActionLatLong.Raw | null;
    }
}
