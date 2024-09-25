/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";

export const Event: core.serialization.ObjectSchema<serializers.Event.Raw, Pinnacle.Event> = core.serialization.object({
    title: core.serialization.string(),
    actionType: core.serialization.property("action_type", core.serialization.stringLiteral("calendar")),
    startTime: core.serialization.property("start_time", core.serialization.date()),
    endTime: core.serialization.property("end_time", core.serialization.date()),
    eventTitle: core.serialization.property("event_title", core.serialization.string()),
    eventDescription: core.serialization.property("event_description", core.serialization.string().optional()),
});

export declare namespace Event {
    interface Raw {
        title: string;
        action_type: "calendar";
        start_time: string;
        end_time: string;
        event_title: string;
        event_description?: string | null;
    }
}
