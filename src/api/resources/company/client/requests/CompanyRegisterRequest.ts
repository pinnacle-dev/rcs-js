/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Pinnacle from "../../../../index";

/**
 * @example
 *     {
 *         company: {
 *             name: "name",
 *             category: "Entertainment",
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
 *         messaging: {
 *             optIn: "By opting in, you agree to receive messages from Pinnacle, including updates and promotions. Reply \u201CSTOP\u201D to unsubscribe. Standard message and data rates may apply.",
 *             optOut: "Reply with keywords like STOP or UNSUBSCRIBE to opt-out. A confirmation message will be sent, and no further messages will be received unless you re-subscribe.",
 *             optOutKeywords: ["STOP", "UNSUBSCRIBE"],
 *             agentUseCase: "Pinnacle\u2019s agent assists with product updates, promotions, order tracking, and support. It answers FAQs, provides order updates, and helps with opt-in/out processes. Escalates to live support when needed.",
 *             expectedAgentResponses: "General Inquiry: \u201CHow can I assist you today?\u201D\nOrder Status: \u201CProvide your order number.\u201D\nOpt-In: \u201CYou\u2019re now subscribed!\u201D\nOpt-Out: \u201CYou have unsubscribed.\u201D\nEscalation: \u201CConnecting to a live agent.\u201D    \n"
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
    messaging: Pinnacle.Messaging;
    pointOfContact: Pinnacle.PointOfContact;
    optionals?: Pinnacle.Optionals;
}
