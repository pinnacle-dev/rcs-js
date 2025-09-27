import { PinnacleClient as FernClient } from "../Client";
import { EnhancedTools } from "./tools/Client.js";
import { EnhancedMessages } from "./messages/Client.js";

export class PinnacleClient extends FernClient {
    protected _tools: EnhancedTools | undefined;
    protected _messages: EnhancedMessages | undefined;

    public get tools(): EnhancedTools {
        return (this._tools ??= new EnhancedTools(this._options));
    }

    public get messages(): EnhancedMessages {
        return (this._messages ??= new EnhancedMessages(this._options));
    }
}
