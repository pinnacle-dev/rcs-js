/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";

export const BadRequestErrorBodyError: core.serialization.ObjectSchema<
    serializers.BadRequestErrorBodyError.Raw,
    Pinnacle.BadRequestErrorBodyError
> = core.serialization.object({
    code: core.serialization.string().optional(),
    expected: core.serialization.string().optional(),
    received: core.serialization.string().optional(),
    path: core.serialization.list(core.serialization.string()).optional(),
    message: core.serialization.string().optional(),
});

export declare namespace BadRequestErrorBodyError {
    interface Raw {
        code?: string | null;
        expected?: string | null;
        received?: string | null;
        path?: string[] | null;
        message?: string | null;
    }
}
