import { PinnacleClient as FernClient } from "../Client.js";
import { EnhancedMessages } from "./messages/Client.js";
import { EnhancedTools } from "./tools/Client.js";
import { EnhancedVoice } from "./voice/Client.js";

export class PinnacleClient extends FernClient {
    protected _tools: EnhancedTools | undefined;
    protected _messages: EnhancedMessages | undefined;
    protected _voice: EnhancedVoice | undefined;

    public get tools(): EnhancedTools {
        if (this._tools === undefined) {
            this._tools = new EnhancedTools(this._options);
        }
        return this._tools;
    }

    public get messages(): EnhancedMessages {
        if (this._messages === undefined) {
            this._messages = new EnhancedMessages(this._options);
        }
        return this._messages;
    }

    public get voice(): EnhancedVoice {
        if (this._voice === undefined) {
            this._voice = new EnhancedVoice(this._options);
        }
        return this._voice;
    }
}
