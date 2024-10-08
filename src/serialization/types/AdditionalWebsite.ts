/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";

export const AdditionalWebsite: core.serialization.ObjectSchema<
    serializers.AdditionalWebsite.Raw,
    Pinnacle.AdditionalWebsite
> = core.serialization.object({
    url: core.serialization.string(),
    label: core.serialization.string(),
});

export declare namespace AdditionalWebsite {
    interface Raw {
        url: string;
        label: string;
    }
}
