/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Pinnacle from "../../../../index";

/**
 * @example
 *     {
 *         company: {
 *             name: "name",
 *             address: "address",
 *             ein: "ein",
 *             description: "description",
 *             brandColor: "brandColor",
 *             logoUrl: "logoUrl",
 *             heroUrl: "heroUrl"
 *         },
 *         companyContact: {
 *             primaryWebsiteUrl: "primaryWebsiteUrl",
 *             primaryWebsiteLabel: "primaryWebsiteLabel",
 *             primaryPhone: "primaryPhone",
 *             primaryPhoneLabel: "primaryPhoneLabel",
 *             primaryEmail: "primaryEmail",
 *             primaryEmailLabel: "primaryEmailLabel",
 *             privacyPolicyUrl: "privacyPolicyUrl",
 *             tosUrl: "tosUrl"
 *         },
 *         pointOfContact: {
 *             pocName: "pocName",
 *             pocTitle: "pocTitle",
 *             pocEmail: "pocEmail"
 *         }
 *     }
 */
export interface CompanyRegisterRequest {
    company: Pinnacle.CompanyDetails;
    companyContact: Pinnacle.CompanyContact;
    pointOfContact: Pinnacle.PointOfContact;
    optionals?: Pinnacle.Optionals;
}
