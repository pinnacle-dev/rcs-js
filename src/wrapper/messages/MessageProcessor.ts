import { Messages } from "../../api/resources/messages/client/Client.js";
import * as Pinnacle from "../../api/index.js";
import { UnauthorizedError, BadRequestError } from "../../api/errors";

export interface MessageHandler {
    onMessage?: (message: Pinnacle.MessageEvent) => Promise<void> | void;
    onStatusUpdate?: (messageId: number, status: string) => Promise<void> | void;
    onError?: (error: Error) => Promise<void> | void;
}

export class MessageProcessor extends Messages {
    private handlers: MessageHandler[] = [];

    public registerHandler(handler: MessageHandler): void {
        this.handlers.push(handler);
    }

    public unregisterHandler(handler: MessageHandler): void {
        const index = this.handlers.indexOf(handler);
        if (index !== -1) {
            this.handlers.splice(index, 1);
        }
    }

    public async process(req: any): Promise<Pinnacle.MessageEvent> {
        await this.checkWebhookSecret(req);

        const body = req.body;

        // Validate the raw body first - this will throw with specific error if invalid
        this.isValidMessageEvent(body);

        return body;
    }

    private async checkWebhookSecret(req: any): Promise<void> {
        const headerSecret = req.headers?.['PINNACLE_SIGNING_SECRET'];
        const envSecret = process.env.PINNACLE_SIGNING_SECRET;
        if (!(envSecret || headerSecret)) {
            throw new UnauthorizedError({ error: "Missing webhook signature" });
        }
    }

    private isStatusUpdate(data: any): boolean {
        return data && typeof data === "object" && "messageId" in data && "status" in data;
    }

    private async handleInboundMessage(data: Pinnacle.MessageEvent): Promise<void> {
        for (const handler of this.handlers) {
            if (handler.onMessage) {
                try {
                    await Promise.resolve(handler.onMessage(data));
                } catch (error) {
                    console.error("Error in message handler:", error);
                    if (handler.onError) {
                        await Promise.resolve(handler.onError(error as Error));
                    }
                }
            }
        }
    }

    private async handleStatusUpdate(data: any): Promise<void> {
        const { messageId, status } = data;

        for (const handler of this.handlers) {
            if (handler.onStatusUpdate) {
                try {
                    await Promise.resolve(handler.onStatusUpdate(messageId, status));
                } catch (error) {
                    console.error("Error in status update handler:", error);
                    if (handler.onError) {
                        await Promise.resolve(handler.onError(error as Error));
                    }
                }
            }
        }
    }

    private async handleError(error: Error): Promise<void> {
        for (const handler of this.handlers) {
            if (handler.onError) {
                try {
                    await Promise.resolve(handler.onError(error));
                } catch (err) {
                    console.error("Error in error handler:", err);
                }
            }
        }
    }

    private normalizeMessage(data: any): Pinnacle.Message {
        if (data.message && typeof data.message === "object") {
            return data.message as Pinnacle.Message;
        }

        const defaultMessage: Pinnacle.Message = {
            id: data.id || Date.now(),
            sender: data.from || data.sender || "unknown",
            receiver: data.to || data.receiver || data.recipient || "unknown",
            content: data.content || { text: data.text || data.body || "" },
            method: data.method || ("default" as Pinnacle.MessageMethodEnum),
            numSegments: data.numSegments || 1,
            status: data.status || ("sent" as Pinnacle.MessageStatusEnum),
            type: data.type || ("sms" as Pinnacle.MessageProtocolEnum),
            sentAt: data.sentAt || new Date().toISOString(),
        };

        return defaultMessage;
    }

    private isValidMessageEvent(data: unknown): data is Pinnacle.MessageEvent {
        // Make sure data is an object (not null or array)
        if (!data || typeof data !== 'object' || Array.isArray(data)){
            throw new BadRequestError({error: "The request body is not an object."});
        }

        // Check required fields exist
        if (!(
            'type' in data && typeof data.type === "string" &&
            'conversation' in data && typeof data.conversation === "object" && data.conversation !== null && !Array.isArray(data.conversation) &&
            'status' in data && typeof data.status === "string" &&
            'direction' in data && typeof data.direction === "string" &&
            'segments' in data && typeof data.segments === "number" &&
            'sentAt' in data && typeof data.sentAt === "string" &&
            'message' in data && typeof data.message === "object" && data.message !== null && !Array.isArray(data.message)
        )) {
            throw new BadRequestError({error: "The request body is missing required fields."});
        }

        return true;
    }
}
