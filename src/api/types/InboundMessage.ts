/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Pinnacle from "../index";

export interface InboundMessage {
    from: string;
    to: string;
    messageType: Pinnacle.InboundMessageMessageType;
    metadata?: Pinnacle.InboundMessageMetadata;
}
