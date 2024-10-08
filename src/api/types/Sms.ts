/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Pinnacle from "../index";

export interface Sms {
    /** Phone number to send the SMS message to */
    phoneNumber: Pinnacle.PhoneNumber;
    /** The type of message being sent */
    messageType: "sms";
    /** The content of the message */
    message: Pinnacle.SmsMessage;
}
