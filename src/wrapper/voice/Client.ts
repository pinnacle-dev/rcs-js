import type * as Pinnacle from "../../api/index.js";
import { Calls } from "../../api/resources/calls/client/Client.js";
import type { BaseClientOptions } from "../../BaseClient.js";
import {
    type VoiceReconnectOptions,
    VoiceSocket,
    type VoiceSocketConstructor,
    type VoiceSocketLike,
    type VoiceSocketOptions,
} from "./VoiceSocket.js";

export interface VoiceConnectOptions {
    callId: string;
    token?: Pinnacle.CreateStreamTokenParams;
    protocols?: string | string[];
    reconnect?: VoiceReconnectOptions;
    socket?: VoiceSocketConstructor;
}

export interface VoiceConnectStreamOptions {
    protocols?: string | string[];
    reconnect?: VoiceReconnectOptions;
    socket?: VoiceSocketConstructor;
}

export class EnhancedVoice {
    private readonly calls: Calls;

    public constructor(options: BaseClientOptions) {
        this.calls = new Calls(options);
    }

    public async connect(options: VoiceConnectOptions): Promise<VoiceSocket> {
        const token = await this.calls.createStreamToken(options.callId, options.token ?? {});
        const streamOptions: VoiceConnectStreamOptions = {};
        if (options.protocols !== undefined) {
            streamOptions.protocols = options.protocols;
        }
        if (options.socket !== undefined) {
            streamOptions.socket = options.socket;
        }
        if (options.reconnect !== undefined) {
            streamOptions.reconnect = options.reconnect;
        }

        const Socket = streamOptions.socket ?? getGlobalSocket();
        const createSocket = async (): Promise<VoiceSocketLike> => {
            const nextToken = await this.calls.createStreamToken(options.callId, options.token ?? {});
            return new Socket(nextToken.stream_url, streamOptions.protocols);
        };

        return new VoiceSocket(
            new Socket(token.stream_url, streamOptions.protocols),
            createVoiceSocketOptions(createSocket, streamOptions.reconnect),
        );
    }

    public connectStream(streamUrl: string, options: VoiceConnectStreamOptions = {}): VoiceSocket {
        const Socket = options.socket ?? getGlobalSocket();
        const createSocket = (): VoiceSocketLike => new Socket(streamUrl, options.protocols);
        return new VoiceSocket(createSocket(), createVoiceSocketOptions(createSocket, options.reconnect));
    }
}

function createVoiceSocketOptions(
    createSocket: () => VoiceSocketLike | Promise<VoiceSocketLike>,
    reconnect: VoiceReconnectOptions | undefined,
): VoiceSocketOptions {
    const options: VoiceSocketOptions = { createSocket };
    if (reconnect !== undefined) {
        options.reconnect = reconnect;
    }
    return options;
}

function getGlobalSocket(): VoiceSocketConstructor {
    const Socket = globalThis.WebSocket;
    if (Socket === undefined) {
        throw new Error(
            "No global WebSocket implementation is available. Pass { socket } to client.voice.connect(...) in Node runtimes without global WebSocket.",
        );
    }
    return Socket as VoiceSocketConstructor;
}
