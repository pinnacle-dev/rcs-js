/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";

export const MediaPayload: core.serialization.ObjectSchema<serializers.MediaPayload.Raw, Pinnacle.MediaPayload> =
    core.serialization.object({
        type: core.serialization.string(),
        url: core.serialization.string(),
    });

export declare namespace MediaPayload {
    interface Raw {
        type: string;
        url: string;
    }
}
