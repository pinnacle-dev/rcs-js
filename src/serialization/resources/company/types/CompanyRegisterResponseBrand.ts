/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Pinnacle from "../../../../api/index";
import * as core from "../../../../core";

export const CompanyRegisterResponseBrand: core.serialization.ObjectSchema<
    serializers.CompanyRegisterResponseBrand.Raw,
    Pinnacle.CompanyRegisterResponseBrand
> = core.serialization.object({
    name: core.serialization.string(),
    id: core.serialization.number(),
});

export declare namespace CompanyRegisterResponseBrand {
    interface Raw {
        name: string;
        id: number;
    }
}
