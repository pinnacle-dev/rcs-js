/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Pinnacle from "../../../../../api/index";
import * as core from "../../../../../core";
import { Company } from "../../../../types/Company";
import { CompanyContact } from "../../../../types/CompanyContact";
import { PointOfContact } from "../../../../types/PointOfContact";
import { Optionals } from "../../../../types/Optionals";

export const CompanyUpdateRequest: core.serialization.Schema<
    serializers.CompanyUpdateRequest.Raw,
    Pinnacle.CompanyUpdateRequest
> = core.serialization.object({
    companyId: core.serialization.string(),
    company: Company.optional(),
    companyContact: CompanyContact.optional(),
    pointOfContact: PointOfContact.optional(),
    optionals: Optionals.optional(),
});

export declare namespace CompanyUpdateRequest {
    interface Raw {
        companyId: string;
        company?: Company.Raw | null;
        companyContact?: CompanyContact.Raw | null;
        pointOfContact?: PointOfContact.Raw | null;
        optionals?: Optionals.Raw | null;
    }
}
