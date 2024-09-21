/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";
import { RcsMessageSent } from "./RcsMessageSent";
import { SmsMessageSent } from "./SmsMessageSent";

export const PostSendResponse: core.serialization.Schema<serializers.PostSendResponse.Raw, Pinnacle.PostSendResponse> =
    core.serialization.undiscriminatedUnion([RcsMessageSent, SmsMessageSent]);

export declare namespace PostSendResponse {
    type Raw = RcsMessageSent.Raw | SmsMessageSent.Raw;
}
