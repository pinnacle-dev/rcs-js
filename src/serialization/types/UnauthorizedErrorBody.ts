/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";

export const UnauthorizedErrorBody: core.serialization.ObjectSchema<
    serializers.UnauthorizedErrorBody.Raw,
    Pinnacle.UnauthorizedErrorBody
> = core.serialization.object({
    error: core.serialization.string().optional(),
});

export declare namespace UnauthorizedErrorBody {
    interface Raw {
        error?: string | null;
    }
}
