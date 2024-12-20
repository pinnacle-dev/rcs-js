/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Pinnacle from "../index";

export interface CompanyDetails {
    /** The name of the company. */
    name: string;
    /** The category of the company. */
    category: Pinnacle.CompanyCategory;
    /** The address of the company. */
    address: string;
    /** The EIN (Employer Identification Number) of the company. */
    ein: string;
    /** A description of the company. */
    description: string;
    /** The brand color in hex format, must pass a contrast ratio of at least 4.5:1 with white. */
    brandColor: string;
    /** URL of the company logo. */
    logoUrl: string;
    /** URL of the company's hero image. */
    heroUrl: string;
}
