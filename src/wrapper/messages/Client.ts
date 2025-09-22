import { MessageProcessor } from "./MessageProcessor.js";
import { Sms } from "../../api/resources/messages/resources/sms/client/Client.js";
import { Mms } from "../../api/resources/messages/resources/mms/client/Client.js";
import { Rcs } from "../../api/resources/messages/resources/rcs/client/Client.js";

export class EnhancedMessages extends MessageProcessor {
    public get sms(): Sms {
        return (this._sms ??= new Sms(this._options));
    }

    public get mms(): Mms {
        return (this._mms ??= new Mms(this._options));
    }

    public get rcs(): Rcs {
        return (this._rcs ??= new Rcs(this._options));
    }

    public process = this.processInbound.bind(this);
}
