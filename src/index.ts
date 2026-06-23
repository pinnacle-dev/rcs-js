export * as Pinnacle from "./api/index.js";
export { PinnacleEnvironment } from "./environments.js";
export { PinnacleError, PinnacleTimeoutError } from "./errors/index.js";
export { PinnacleClient } from "./wrapper/PinnacleClient.js";
export type {
    VoiceConnectOptions,
    VoiceConnectStreamOptions,
} from "./wrapper/voice/Client.js";
export { EnhancedVoice } from "./wrapper/voice/Client.js";
export * from "./wrapper/voice/types.js";
export type {
    VoiceAckOptions,
    VoiceEvent,
    VoiceEvents,
    VoiceReconnectEvent,
    VoiceReconnectOptions,
    VoiceSocketConstructor,
    VoiceSocketFactory,
    VoiceSocketLike,
    VoiceSocketOptions,
} from "./wrapper/voice/VoiceSocket.js";
export { createVoiceCommandId, VoiceSocket } from "./wrapper/voice/VoiceSocket.js";
