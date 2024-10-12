/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";
import { UpdateCompanyResponseBrand } from "./UpdateCompanyResponseBrand";

export const UpdateCompanyResponse: core.serialization.ObjectSchema<
    serializers.UpdateCompanyResponse.Raw,
    Pinnacle.UpdateCompanyResponse
> = core.serialization.object({
    success: core.serialization.boolean().optional(),
    brand: UpdateCompanyResponseBrand.optional(),
});

export declare namespace UpdateCompanyResponse {
    interface Raw {
        success?: boolean | null;
        brand?: UpdateCompanyResponseBrand.Raw | null;
    }
}