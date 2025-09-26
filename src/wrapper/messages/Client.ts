import { Messages } from "../../api/resources/messages/client/Client.js";
import { UnauthorizedError } from "../../api/errors/index.js";
import * as Pinnacle from "../../api/index.js";

interface ExpressLikeRequest {
    headers: Record<string, string | string[] | undefined>;
    body?: any;
    get?: (name: string) => string | undefined;
    protocol?: string;
    originalUrl?: string;
}

export class EnhancedMessages extends Messages {
    public async process(req: Request, secret?: string): Promise<Pinnacle.MessageEvent>;

    public async process(req: ExpressLikeRequest, secret?: string): Promise<Pinnacle.MessageEvent>;

    public async process(req: Request | ExpressLikeRequest, secret?: string): Promise<Pinnacle.MessageEvent> {
        const signingSecret = secret || process.env.PINNACLE_SIGNING_SECRET;

        let headerSecret: string | undefined;
        let body: any;

        if (req instanceof Request) {
            headerSecret =
                req.headers?.get("PINNACLE-SIGNING-SECRET") || req.headers?.get("pinnacle-signing-secret") || undefined;
            body = await req.json();
        } else {
            const headers = req.headers;
            headerSecret = headers["pinnacle-signing-secret"] as string | undefined;
            body = req.body;
        }

        if (!signingSecret) {
            throw new UnauthorizedError({
                error: "Make sure to set the PINNACLE-SIGNING-SECRET environment variable or pass the secret as an argument to the process method",
            });
        }
        if (!headerSecret) {
            throw new UnauthorizedError({
                error: "Failed to get the PINNACLE-SIGNING-SECRET header from request",
            });
        }
        if (headerSecret !== signingSecret) {
            throw new UnauthorizedError({ error: "Invalid webhook signature" });
        }

        return body as Pinnacle.MessageEvent;
    }
}
