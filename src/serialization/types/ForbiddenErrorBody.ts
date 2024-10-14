/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";

export const ForbiddenErrorBody: core.serialization.ObjectSchema<
    serializers.ForbiddenErrorBody.Raw,
    Pinnacle.ForbiddenErrorBody
> = core.serialization.object({
    errors: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace ForbiddenErrorBody {
    interface Raw {
        errors?: string[] | null;
    }
}
