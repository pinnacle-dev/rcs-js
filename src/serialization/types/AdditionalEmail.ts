/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";

export const AdditionalEmail: core.serialization.ObjectSchema<
    serializers.AdditionalEmail.Raw,
    Pinnacle.AdditionalEmail
> = core.serialization.object({
    email: core.serialization.string(),
    label: core.serialization.string(),
});

export declare namespace AdditionalEmail {
    interface Raw {
        email: string;
        label: string;
    }
}