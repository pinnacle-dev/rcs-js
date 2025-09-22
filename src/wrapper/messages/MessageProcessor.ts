import { Messages } from "../../api/resources/messages/client/Client.js";
import * as Pinnacle from "../../api/index.js";

// # TODO

export interface MessageHandler {
    onMessage?: (message: Pinnacle.Message) => Promise<void> | void;
    onStatusUpdate?: (messageId: number, status: string) => Promise<void> | void;
    onError?: (error: Error) => Promise<void> | void;
}

Pinnacle.MessageEvent;

export class MessageProcessor extends Messages {
    private handlers: MessageHandler[] = [];
    private isProcessing: boolean = false;

    public registerHandler(handler: MessageHandler): void {
        this.handlers.push(handler);
    }

    public unregisterHandler(handler: MessageHandler): void {
        const index = this.handlers.indexOf(handler);
        if (index !== -1) {
            this.handlers.splice(index, 1);
        }
    }

    public async processInbound(data: any): Promise<void> {
        if (this.isProcessing) {
            return;
        }

        this.isProcessing = true;

        try {
            if (this.isInboundMessage(data)) {
                await this.handleInboundMessage(data);
            } else if (this.isStatusUpdate(data)) {
                await this.handleStatusUpdate(data);
            }
        } catch (error) {
            await this.handleError(error as Error);
        } finally {
            this.isProcessing = false;
        }
    }

    public async handle(data: any): Promise<void> {
        return this.processInbound(data);
    }

    private isInboundMessage(data: any): boolean {
        return data && typeof data === "object" && ("message" in data || "text" in data || "media" in data);
    }

    private isStatusUpdate(data: any): boolean {
        return data && typeof data === "object" && "messageId" in data && "status" in data;
    }

    private async handleInboundMessage(data: any): Promise<void> {
        const message = this.normalizeMessage(data);

        for (const handler of this.handlers) {
            if (handler.onMessage) {
                try {
                    await Promise.resolve(handler.onMessage(message));
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

        if (this.isValidMessage(data)) {
            return data as Pinnacle.Message;
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

    private isValidMessage(data: any): data is Pinnacle.Message {
        return (
            data &&
            typeof data === "object" &&
            "id" in data &&
            "sender" in data &&
            "receiver" in data &&
            "content" in data &&
            "method" in data &&
            "numSegments" in data &&
            "status" in data &&
            "type" in data
        );
    }
}
