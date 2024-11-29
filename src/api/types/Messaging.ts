/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Messaging {
    /** Explain how users will opt in to receive messages. */
    optIn: string;
    /** Explain how users will opt out of receiving messages. */
    optOut: string;
    /** Please provide the unique keywords to opt out. Each keyword should not contain spaces. */
    optOutKeywords: string[];
    /** Please define what your agent will do. */
    agentUseCase: string;
    /** Please provide some example messages that your agent will send. */
    expectedAgentResponses: string;
}
