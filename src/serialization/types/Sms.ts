/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";
import { PhoneNumber } from "./PhoneNumber";
import { SmsMessage } from "./SmsMessage";

export const Sms: core.serialization.ObjectSchema<serializers.Sms.Raw, Pinnacle.Sms> = core.serialization.object({
    phoneNumber: core.serialization.property("phone_number", PhoneNumber),
    messageType: core.serialization.property("message_type", core.serialization.stringLiteral("sms")),
    message: SmsMessage,
});

export declare namespace Sms {
    interface Raw {
        phone_number: PhoneNumber.Raw;
        message_type: "sms";
        message: SmsMessage.Raw;
    }
}
