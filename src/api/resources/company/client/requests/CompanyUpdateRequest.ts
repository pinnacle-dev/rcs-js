/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Pinnacle from "../../../../index";

/**
 * @example
 *     {
 *         companyId: "companyId"
 *     }
 */
export interface CompanyUpdateRequest {
    companyId: string;
    company?: Pinnacle.Company;
    companyContact?: Pinnacle.CompanyContact;
    messaging?: Pinnacle.Messaging;
    pointOfContact?: Pinnacle.PointOfContact;
    optionals?: Pinnacle.Optionals;
}
