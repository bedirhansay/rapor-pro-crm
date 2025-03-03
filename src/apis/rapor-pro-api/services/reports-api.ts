/* tslint:disable */
/* eslint-disable */
/**
 * Rapor Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { CreateReportCommand } from '../interfaces';
/**
 * ReportsApi - axios parameter creator
 * @export
 */
export const ReportsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateReportCommand} createReportCommand 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addReport: async (createReportCommand: CreateReportCommand, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createReportCommand' is not null or undefined
            assertParamExists('addReport', 'createReportCommand', createReportCommand)
            const localVarPath = `/api/Reports/add-report`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createReportCommand, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ReportsApi - functional programming interface
 * @export
 */
export const ReportsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ReportsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateReportCommand} createReportCommand 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addReport(createReportCommand: CreateReportCommand, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addReport(createReportCommand, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReportsApi.addReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ReportsApi - factory interface
 * @export
 */
export const ReportsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ReportsApiFp(configuration)
    return {
        /**
         * 
         * @param {ReportsApiAddReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addReport(requestParameters: ReportsApiAddReportRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.addReport(requestParameters.createReportCommand, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addReport operation in ReportsApi.
 * @export
 * @interface ReportsApiAddReportRequest
 */
export interface ReportsApiAddReportRequest {
    /**
     * 
     * @type {CreateReportCommand}
     * @memberof ReportsApiAddReport
     */
    readonly createReportCommand: CreateReportCommand
}

/**
 * ReportsApi - object-oriented interface
 * @export
 * @class ReportsApi
 * @extends {BaseAPI}
 */
export class ReportsApi extends BaseAPI {
    /**
     * 
     * @param {ReportsApiAddReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    public addReport(requestParameters: ReportsApiAddReportRequest, options?: RawAxiosRequestConfig) {
        return ReportsApiFp(this.configuration).addReport(requestParameters.createReportCommand, options).then((request) => request(this.axios, this.basePath));
    }
}

