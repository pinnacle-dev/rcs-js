export const VoiceCommandAction = {
    CallAnswer: "call.answer",
    CallEnd: "call.end",
    CallTransfer: "call.transfer",
    RecordingStart: "recording.start",
    RecordingStop: "recording.stop",
    AudioPlay: "audio.play",
    AudioStop: "audio.stop",
    AudioReduceNoise: "audio.reduce_noise",
    InputGet: "input.get",
    InputCancel: "input.cancel",
    DtmfSend: "dtmf.send",
    CallUpdateState: "call.update_state",
} as const;

export type VoiceCommandAction = (typeof VoiceCommandAction)[keyof typeof VoiceCommandAction];

export const VoiceCallEndCause = {
    UserBusy: "user_busy",
    CallRejected: "call_rejected",
} as const;

export type VoiceCallEndCause = (typeof VoiceCallEndCause)[keyof typeof VoiceCallEndCause];

export const VoiceNoiseReductionEngine = {
    Default: "default",
    Krisp: "krisp",
    AiCoustics: "aicoustics",
} as const;

export type VoiceNoiseReductionEngine = (typeof VoiceNoiseReductionEngine)[keyof typeof VoiceNoiseReductionEngine];

export const VoiceNoiseReductionDirection = {
    Inbound: "inbound",
    Outbound: "outbound",
    Both: "both",
} as const;

export type VoiceNoiseReductionDirection =
    (typeof VoiceNoiseReductionDirection)[keyof typeof VoiceNoiseReductionDirection];

export const VoiceMediaTrack = {
    Inbound: "inbound",
    Outbound: "outbound",
} as const;

export type VoiceMediaTrack = (typeof VoiceMediaTrack)[keyof typeof VoiceMediaTrack];

export type VoiceCallMetadata = Record<string, string>;

export interface VoiceCallAnswerCommandParams {
    as?: string;
}

export interface VoiceCallEndCommandParams {
    cause?: VoiceCallEndCause;
}

export interface VoiceCallTransferDialParams {
    to: string;
    from?: string;
    as?: string;
    custom_headers?: Record<string, string>;
}

export interface VoiceCallTransferBridgeParams {
    /** Pinnacle call ID. Provider call-control IDs are not accepted. */
    call_id: string;
    as?: string;
}

export type VoiceCallTransferCommandParams = VoiceCallTransferDialParams | VoiceCallTransferBridgeParams;

export type VoiceAudioPlayCommandParams =
    | {
          url: string;
          loop?: number;
          overlay?: boolean;
      }
    | {
          text: string;
          voice?: string;
          language?: string;
      };

export interface VoiceAudioReduceNoiseCommandParams {
    enabled: boolean;
    engine?: VoiceNoiseReductionEngine;
    direction?: VoiceNoiseReductionDirection;
}

export type VoicePrompt =
    | {
          url: string;
      }
    | {
          text: string;
          voice?: string;
          language?: string;
      };

export interface VoiceAiExtraction {
    extract: Record<string, unknown>;
    instructions?: string;
}

export interface VoiceInputGetCommandParams {
    prompt?: VoicePrompt;
    maxDigits?: number;
    minDigits?: number;
    terminatingDigit?: string;
    validDigits?: string;
    timeoutMs?: number;
    interDigitTimeoutMs?: number;
    ai?: VoiceAiExtraction;
}

export interface VoiceDtmfSendCommandParams {
    digits: string;
    duration_ms?: number;
}

export interface VoiceCallUpdateStateCommandParams {
    metadata: VoiceCallMetadata;
}

export type VoiceCommandFrame =
    | {
          event: "command";
          command_id: string;
          action: "call.answer";
          params?: VoiceCallAnswerCommandParams;
      }
    | {
          event: "command";
          command_id: string;
          action: "call.end";
          params?: VoiceCallEndCommandParams;
      }
    | {
          event: "command";
          command_id: string;
          action: "call.transfer";
          params: VoiceCallTransferCommandParams;
      }
    | {
          event: "command";
          command_id: string;
          action: "recording.start";
          params?: undefined;
      }
    | {
          event: "command";
          command_id: string;
          action: "recording.stop";
          params?: undefined;
      }
    | {
          event: "command";
          command_id: string;
          action: "audio.play";
          params: VoiceAudioPlayCommandParams;
      }
    | {
          event: "command";
          command_id: string;
          action: "audio.stop";
          params?: undefined;
      }
    | {
          event: "command";
          command_id: string;
          action: "audio.reduce_noise";
          params: VoiceAudioReduceNoiseCommandParams;
      }
    | {
          event: "command";
          command_id: string;
          action: "input.get";
          params?: VoiceInputGetCommandParams;
      }
    | {
          event: "command";
          command_id: string;
          action: "input.cancel";
          params?: undefined;
      }
    | {
          event: "command";
          command_id: string;
          action: "dtmf.send";
          params: VoiceDtmfSendCommandParams;
      }
    | {
          event: "command";
          command_id: string;
          action: "call.update_state";
          params: VoiceCallUpdateStateCommandParams;
      };

export interface VoiceClientMedia {
    track?: VoiceMediaTrack;
    payload: string;
    chunk?: number;
    timestamp?: string;
}

export interface VoiceClientMediaFrame {
    event: "media";
    media: VoiceClientMedia;
}

export type VoiceClientFrame = VoiceCommandFrame | VoiceClientMediaFrame;

export interface VoiceCommandAckFrame {
    event: "ack";
    command_id: string;
    action: VoiceCommandAction;
    status: "ok" | "error";
    message?: string;
    [key: string]: unknown;
}

export interface VoiceConnectedFrame {
    event: "connected";
    stream_sid: string;
    sequence_number?: number;
}

export interface VoiceServerEventFrame {
    event: "event";
    type: string;
    stream_sid: string;
    call_session_id?: string;
    sequence_number: number;
    payload: Record<string, unknown>;
}

export interface VoiceServerMediaFrame {
    event: "media";
    stream_sid?: string;
    call_session_id?: string;
    sequence_number?: number;
    media: VoiceClientMedia;
}

export type VoiceServerFrame = VoiceConnectedFrame | VoiceCommandAckFrame | VoiceServerEventFrame | VoiceServerMediaFrame;
