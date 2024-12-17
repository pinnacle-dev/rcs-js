/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";

export const Messaging: core.serialization.ObjectSchema<serializers.Messaging.Raw, Pinnacle.Messaging> =
    core.serialization.object({
        optIn: core.serialization.string(),
        optOut: core.serialization.string(),
        optOutKeywords: core.serialization.list(core.serialization.string()),
        agentUseCase: core.serialization.string(),
        expectedAgentResponses: core.serialization.string(),
    });

export declare namespace Messaging {
    interface Raw {
        optIn: string;
        optOut: string;
        optOutKeywords: string[];
        agentUseCase: string;
        expectedAgentResponses: string;
    }
}