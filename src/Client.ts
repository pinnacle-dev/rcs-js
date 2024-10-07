/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import * as Pinnacle from "./api/index";
import urlJoin from "url-join";
import * as serializers from "./serialization/index";
import * as errors from "./errors/index";

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
     * Checks if a phone number is able to receive RCS
     *
     * @param {Pinnacle.CheckRcsCapabilityRequest} request
     * @param {PinnacleClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Pinnacle.BadRequestError}
     * @throws {@link Pinnacle.UnauthorizedError}
     * @throws {@link Pinnacle.InternalServerError}
     *
     * @example
     *     await client.checkRcsCapability({
     *         phoneNumber: "phone_number"
     *     })
     */
    public async checkRcsCapability(
        request: Pinnacle.CheckRcsCapabilityRequest,
        requestOptions?: PinnacleClient.RequestOptions
    ): Promise<Pinnacle.CheckRcsCapabilityResponse> {
        const { phoneNumber } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["phone_number"] = phoneNumber;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PinnacleEnvironment.Default,
                "check_rcs"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "rcs-js",
                "X-Fern-SDK-Version": "1.0.7",
                "User-Agent": "rcs-js/1.0.7",
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
            return serializers.CheckRcsCapabilityResponse.parseOrThrow(_response.body, {
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
     * Initializes settings related to RCS messaging, including webhook registration.
     *
     * @param {Pinnacle.UpdateSettingsRequest} request
     * @param {PinnacleClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Pinnacle.BadRequestError}
     * @throws {@link Pinnacle.UnauthorizedError}
     * @throws {@link Pinnacle.InternalServerError}
     *
     * @example
     *     await client.updateSettings({
     *         webhookUrl: "webhook_url"
     *     })
     */
    public async updateSettings(
        request: Pinnacle.UpdateSettingsRequest,
        requestOptions?: PinnacleClient.RequestOptions
    ): Promise<Pinnacle.UpdateSettingsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PinnacleEnvironment.Default,
                "update_settings"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "rcs-js",
                "X-Fern-SDK-Version": "1.0.7",
                "User-Agent": "rcs-js/1.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.UpdateSettingsRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.UpdateSettingsResponse.parseOrThrow(_response.body, {
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
     * Retrieve the phone number associated with the account.
     *
     * @param {PinnacleClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Pinnacle.UnauthorizedError}
     * @throws {@link Pinnacle.InternalServerError}
     *
     * @example
     *     await client.getAccountNumber()
     */
    public async getAccountNumber(
        requestOptions?: PinnacleClient.RequestOptions
    ): Promise<Pinnacle.GetAccountNumberResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PinnacleEnvironment.Default,
                "get_account_number"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "rcs-js",
                "X-Fern-SDK-Version": "1.0.7",
                "User-Agent": "rcs-js/1.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.GetAccountNumberResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
     * Send a SMS or RCS message to a phone number
     *
     * @param {Pinnacle.SendMessageRequest} request
     * @param {PinnacleClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Pinnacle.BadRequestError}
     * @throws {@link Pinnacle.UnauthorizedError}
     * @throws {@link Pinnacle.InternalServerError}
     *
     * @example
     *     await client.sendMessage({
     *         phoneNumber: "phone_number",
     *         messageType: "card",
     *         message: {
     *             cards: [{
     *                     title: "title"
     *                 }]
     *         }
     *     })
     */
    public async sendMessage(
        request: Pinnacle.SendMessageRequest,
        requestOptions?: PinnacleClient.RequestOptions
    ): Promise<Pinnacle.SendMessageResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PinnacleEnvironment.Default,
                "send"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "rcs-js",
                "X-Fern-SDK-Version": "1.0.7",
                "User-Agent": "rcs-js/1.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SendMessageRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SendMessageResponse.parseOrThrow(_response.body, {
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
     * Retrieve the company's information (i.e. approval status, company name, etc.). Search by company ID or company name.
     *
     * @param {Pinnacle.GetCompanyRequest} request
     * @param {PinnacleClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Pinnacle.BadRequestError}
     * @throws {@link Pinnacle.UnauthorizedError}
     * @throws {@link Pinnacle.NotFoundError}
     * @throws {@link Pinnacle.InternalServerError}
     *
     * @example
     *     await client.getCompany()
     */
    public async getCompany(
        request: Pinnacle.GetCompanyRequest = {},
        requestOptions?: PinnacleClient.RequestOptions
    ): Promise<Pinnacle.Company[]> {
        const { companyId, companyName } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (companyId != null) {
            _queryParams["companyId"] = companyId.toString();
        }

        if (companyName != null) {
            _queryParams["companyName"] = companyName;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PinnacleEnvironment.Default,
                "company"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "rcs-js",
                "X-Fern-SDK-Version": "1.0.7",
                "User-Agent": "rcs-js/1.0.7",
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
            return serializers.getCompany.Response.parseOrThrow(_response.body, {
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
                case 404:
                    throw new Pinnacle.NotFoundError(
                        serializers.NotFoundErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
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
     * Register a company for RCS with the Pinnacle platform
     *
     * @param {Pinnacle.RegisterCompanyRequest} request
     * @param {PinnacleClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Pinnacle.BadRequestError}
     * @throws {@link Pinnacle.UnauthorizedError}
     * @throws {@link Pinnacle.InternalServerError}
     *
     * @example
     *     await client.registerCompany({
     *         company: {
     *             name: "name",
     *             address: "address",
     *             ein: "ein",
     *             description: "description",
     *             brandColor: "brandColor",
     *             logoUrl: "logoUrl",
     *             heroUrl: "heroUrl"
     *         },
     *         companyContact: {
     *             primaryWebsiteUrl: "primaryWebsiteUrl",
     *             primaryWebsiteLabel: "primaryWebsiteLabel",
     *             primaryPhone: "primaryPhone",
     *             primaryPhoneLabel: "primaryPhoneLabel",
     *             primaryEmail: "primaryEmail",
     *             primaryEmailLabel: "primaryEmailLabel",
     *             privacyPolicyUrl: "privacyPolicyUrl",
     *             tosUrl: "tosUrl"
     *         },
     *         pointOfContact: {
     *             pocName: "pocName",
     *             pocTitle: "pocTitle",
     *             pocEmail: "pocEmail"
     *         }
     *     })
     */
    public async registerCompany(
        request: Pinnacle.RegisterCompanyRequest,
        requestOptions?: PinnacleClient.RequestOptions
    ): Promise<Pinnacle.RegisterCompanyResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PinnacleEnvironment.Default,
                "company/register"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "rcs-js",
                "X-Fern-SDK-Version": "1.0.7",
                "User-Agent": "rcs-js/1.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.RegisterCompanyRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.RegisterCompanyResponse.parseOrThrow(_response.body, {
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
     * Update a company on the Pinnacle platform
     *
     * @param {Pinnacle.UpdateCompanyRequest} request
     * @param {PinnacleClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Pinnacle.BadRequestError}
     * @throws {@link Pinnacle.UnauthorizedError}
     * @throws {@link Pinnacle.InternalServerError}
     *
     * @example
     *     await client.updateCompany({
     *         companyId: "companyId"
     *     })
     */
    public async updateCompany(
        request: Pinnacle.UpdateCompanyRequest,
        requestOptions?: PinnacleClient.RequestOptions
    ): Promise<Pinnacle.UpdateCompanyResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PinnacleEnvironment.Default,
                "company/update"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "rcs-js",
                "X-Fern-SDK-Version": "1.0.7",
                "User-Agent": "rcs-js/1.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.UpdateCompanyRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.UpdateCompanyResponse.parseOrThrow(_response.body, {
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
