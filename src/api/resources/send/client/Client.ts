/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Pinnacle from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Send {
    interface Options {
        environment?: core.Supplier<environments.PinnacleEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Send {
    constructor(protected readonly _options: Send.Options) {}

    /**
     * Send an interactive RCS message with text, media, or cards. Each message can only contain either text, media, or card(s).
     *
     * Quick replies can also be added to the message.
     *
     * @param {Pinnacle.Rcs} request
     * @param {Send.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Pinnacle.BadRequestError}
     * @throws {@link Pinnacle.UnauthorizedError}
     * @throws {@link Pinnacle.ForbiddenError}
     * @throws {@link Pinnacle.InternalServerError}
     *
     * @example
     *     await client.send.rcs({
     *         from: "from",
     *         to: "to"
     *     })
     */
    public async rcs(request: Pinnacle.Rcs, requestOptions?: Send.RequestOptions): Promise<Pinnacle.SendRcsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PinnacleEnvironment.Default,
                "send/rcs"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "rcs-js",
                "X-Fern-SDK-Version": "1.0.9",
                "User-Agent": "rcs-js/1.0.9",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.Rcs.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SendRcsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Pinnacle.BadRequestError(_response.error.body);
                case 401:
                    throw new Pinnacle.UnauthorizedError(_response.error.body);
                case 403:
                    throw new Pinnacle.ForbiddenError(_response.error.body);
                case 500:
                    throw new Pinnacle.InternalServerError(_response.error.body);
                default:
                    throw new errors.PinnacleError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PinnacleError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PinnacleTimeoutError();
            case "unknown":
                throw new errors.PinnacleError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Send an SMS message to a recipient.
     *
     * @param {Pinnacle.SendSmsRequest} request
     * @param {Send.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Pinnacle.BadRequestError}
     * @throws {@link Pinnacle.UnauthorizedError}
     * @throws {@link Pinnacle.ForbiddenError}
     * @throws {@link Pinnacle.InternalServerError}
     *
     * @example
     *     await client.send.sms({
     *         to: "to",
     *         from: "from",
     *         text: "text"
     *     })
     */
    public async sms(
        request: Pinnacle.SendSmsRequest,
        requestOptions?: Send.RequestOptions
    ): Promise<Pinnacle.SendSmsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PinnacleEnvironment.Default,
                "send/sms"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "rcs-js",
                "X-Fern-SDK-Version": "1.0.9",
                "User-Agent": "rcs-js/1.0.9",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SendSmsRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SendSmsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Pinnacle.BadRequestError(_response.error.body);
                case 401:
                    throw new Pinnacle.UnauthorizedError(_response.error.body);
                case 403:
                    throw new Pinnacle.ForbiddenError(_response.error.body);
                case 500:
                    throw new Pinnacle.InternalServerError(_response.error.body);
                default:
                    throw new errors.PinnacleError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PinnacleError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PinnacleTimeoutError();
            case "unknown":
                throw new errors.PinnacleError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Send an MMS message with media attachments.
     *
     * @param {Pinnacle.SendMmsRequest} request
     * @param {Send.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Pinnacle.BadRequestError}
     * @throws {@link Pinnacle.UnauthorizedError}
     * @throws {@link Pinnacle.ForbiddenError}
     * @throws {@link Pinnacle.InternalServerError}
     *
     * @example
     *     await client.send.mms({
     *         to: "to",
     *         from: "from",
     *         text: "text",
     *         mediaUrls: ["https://example.com/image1.jpg", "https://example.com/video.mp4"]
     *     })
     */
    public async mms(
        request: Pinnacle.SendMmsRequest,
        requestOptions?: Send.RequestOptions
    ): Promise<Pinnacle.SendMmsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PinnacleEnvironment.Default,
                "send/mms"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "rcs-js",
                "X-Fern-SDK-Version": "1.0.9",
                "User-Agent": "rcs-js/1.0.9",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SendMmsRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SendMmsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Pinnacle.BadRequestError(_response.error.body);
                case 401:
                    throw new Pinnacle.UnauthorizedError(_response.error.body);
                case 403:
                    throw new Pinnacle.ForbiddenError(_response.error.body);
                case 500:
                    throw new Pinnacle.InternalServerError(_response.error.body);
                default:
                    throw new errors.PinnacleError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PinnacleError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PinnacleTimeoutError();
            case "unknown":
                throw new errors.PinnacleError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "PINNACLE-API-Key": apiKeyValue };
    }
}