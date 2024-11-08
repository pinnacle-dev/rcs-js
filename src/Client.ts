/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import * as Pinnacle from "./api/index";
import urlJoin from "url-join";
import * as serializers from "./serialization/index";
import * as errors from "./errors/index";
import { Company } from "./api/resources/company/client/Client";
import { Send } from "./api/resources/send/client/Client";

export declare namespace PinnacleClient {
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

export class PinnacleClient {
    constructor(protected readonly _options: PinnacleClient.Options) {}

    /**
     * Retrieve the RCS functionality of a phone number. For example checks if a phone number can receive RCS message and if it can receive RCS carousels.
     *
     * @param {Pinnacle.GetRcsFunctionalityRequest} request
     * @param {PinnacleClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Pinnacle.BadRequestError}
     * @throws {@link Pinnacle.UnauthorizedError}
     * @throws {@link Pinnacle.InternalServerError}
     *
     * @example
     *     await client.getRcsFunctionality()
     */
    public async getRcsFunctionality(
        request: Pinnacle.GetRcsFunctionalityRequest = {},
        requestOptions?: PinnacleClient.RequestOptions
    ): Promise<Pinnacle.RcsFunctionalities> {
        const { phoneNumber } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (phoneNumber != null) {
            _queryParams["phoneNumber"] = phoneNumber;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PinnacleEnvironment.Default,
                "rcs_functionality"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "rcs-js",
                "X-Fern-SDK-Version": "1.0.14",
                "User-Agent": "rcs-js/1.0.14",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.RcsFunctionalities.parseOrThrow(_response.body, {
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

    protected _company: Company | undefined;

    public get company(): Company {
        return (this._company ??= new Company(this._options));
    }

    protected _send: Send | undefined;

    public get send(): Send {
        return (this._send ??= new Send(this._options));
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "PINNACLE-API-Key": apiKeyValue };
    }
}
