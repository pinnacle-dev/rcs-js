/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Pinnacle from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Tools {
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

export class Tools {
    constructor(protected readonly _options: Tools.Options) {}

    /**
     * Create a shortened URL with an optional expiration date (default and max expiration is 90 days). The shortened URL will redirect to the original URL and will have the following format https://urls.p1n.io/ABCD5678.
     *
     * @param {Pinnacle.ToolsShortenUrlRequest} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Pinnacle.BadRequestError}
     * @throws {@link Pinnacle.UnauthorizedError}
     * @throws {@link Pinnacle.InternalServerError}
     *
     * @example
     *     await client.tools.shortenUrl({
     *         url: "https://example.com"
     *     })
     */
    public async shortenUrl(
        request: Pinnacle.ToolsShortenUrlRequest,
        requestOptions?: Tools.RequestOptions
    ): Promise<Pinnacle.ToolsShortenUrlResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PinnacleEnvironment.Default,
                "tools/urls/shorten"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "rcs-js",
                "X-Fern-SDK-Version": "1.0.16",
                "User-Agent": "rcs-js/1.0.16",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.ToolsShortenUrlRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ToolsShortenUrlResponse.parseOrThrow(_response.body, {
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
     * Generate signed upload (expires in 2 hours) and download URLs for a file (expires in 1 hour).
     *
     * @param {Pinnacle.ToolsUploadUrlRequest} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Pinnacle.BadRequestError}
     * @throws {@link Pinnacle.UnauthorizedError}
     * @throws {@link Pinnacle.InternalServerError}
     *
     * @example
     *     await client.tools.uploadUrl({
     *         contentType: "image/png",
     *         size: 1024,
     *         name: "example.png"
     *     })
     */
    public async uploadUrl(
        request: Pinnacle.ToolsUploadUrlRequest,
        requestOptions?: Tools.RequestOptions
    ): Promise<Pinnacle.ToolsUploadUrlResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PinnacleEnvironment.Default,
                "tools/uploadUrl"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "rcs-js",
                "X-Fern-SDK-Version": "1.0.16",
                "User-Agent": "rcs-js/1.0.16",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.ToolsUploadUrlRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ToolsUploadUrlResponse.parseOrThrow(_response.body, {
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