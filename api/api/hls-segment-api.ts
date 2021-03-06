/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ProblemDetails } from '../models';
/**
 * HlsSegmentApi - axios parameter creator
 * @export
 */
export const HlsSegmentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets the specified audio segment for an audio item.
         * @param {string} itemId The item id.
         * @param {string} segmentId The segment id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHlsAudioSegmentLegacyAac: async (itemId: string, segmentId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new RequiredError('itemId','Required parameter itemId was null or undefined when calling getHlsAudioSegmentLegacyAac.');
            }
            // verify required parameter 'segmentId' is not null or undefined
            if (segmentId === null || segmentId === undefined) {
                throw new RequiredError('segmentId','Required parameter segmentId was null or undefined when calling getHlsAudioSegmentLegacyAac.');
            }
            const localVarPath = `/Audio/{itemId}/hls/{segmentId}/stream.aac`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)))
                .replace(`{${"segmentId"}}`, encodeURIComponent(String(segmentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets the specified audio segment for an audio item.
         * @param {string} itemId The item id.
         * @param {string} segmentId The segment id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHlsAudioSegmentLegacyMp3: async (itemId: string, segmentId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new RequiredError('itemId','Required parameter itemId was null or undefined when calling getHlsAudioSegmentLegacyMp3.');
            }
            // verify required parameter 'segmentId' is not null or undefined
            if (segmentId === null || segmentId === undefined) {
                throw new RequiredError('segmentId','Required parameter segmentId was null or undefined when calling getHlsAudioSegmentLegacyMp3.');
            }
            const localVarPath = `/Audio/{itemId}/hls/{segmentId}/stream.mp3`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)))
                .replace(`{${"segmentId"}}`, encodeURIComponent(String(segmentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a hls video playlist.
         * @param {string} itemId The video id.
         * @param {string} playlistId The playlist id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHlsPlaylistLegacy: async (itemId: string, playlistId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new RequiredError('itemId','Required parameter itemId was null or undefined when calling getHlsPlaylistLegacy.');
            }
            // verify required parameter 'playlistId' is not null or undefined
            if (playlistId === null || playlistId === undefined) {
                throw new RequiredError('playlistId','Required parameter playlistId was null or undefined when calling getHlsPlaylistLegacy.');
            }
            const localVarPath = `/Videos/{itemId}/hls/{playlistId}/stream.m3u8`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)))
                .replace(`{${"playlistId"}}`, encodeURIComponent(String(playlistId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a hls video segment.
         * @param {string} itemId The item id.
         * @param {string} playlistId The playlist id.
         * @param {string} segmentId The segment id.
         * @param {string} segmentContainer The segment container.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHlsVideoSegmentLegacy: async (itemId: string, playlistId: string, segmentId: string, segmentContainer: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new RequiredError('itemId','Required parameter itemId was null or undefined when calling getHlsVideoSegmentLegacy.');
            }
            // verify required parameter 'playlistId' is not null or undefined
            if (playlistId === null || playlistId === undefined) {
                throw new RequiredError('playlistId','Required parameter playlistId was null or undefined when calling getHlsVideoSegmentLegacy.');
            }
            // verify required parameter 'segmentId' is not null or undefined
            if (segmentId === null || segmentId === undefined) {
                throw new RequiredError('segmentId','Required parameter segmentId was null or undefined when calling getHlsVideoSegmentLegacy.');
            }
            // verify required parameter 'segmentContainer' is not null or undefined
            if (segmentContainer === null || segmentContainer === undefined) {
                throw new RequiredError('segmentContainer','Required parameter segmentContainer was null or undefined when calling getHlsVideoSegmentLegacy.');
            }
            const localVarPath = `/Videos/{itemId}/hls/{playlistId}/{segmentId}.{segmentContainer}`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)))
                .replace(`{${"playlistId"}}`, encodeURIComponent(String(playlistId)))
                .replace(`{${"segmentId"}}`, encodeURIComponent(String(segmentId)))
                .replace(`{${"segmentContainer"}}`, encodeURIComponent(String(segmentContainer)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Stops an active encoding.
         * @param {string} [deviceId] The device id of the client requesting. Used to stop encoding processes when needed.
         * @param {string} [playSessionId] The play session id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stopEncodingProcess: async (deviceId?: string, playSessionId?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Videos/ActiveEncodings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (deviceId !== undefined) {
                localVarQueryParameter['deviceId'] = deviceId;
            }

            if (playSessionId !== undefined) {
                localVarQueryParameter['playSessionId'] = playSessionId;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HlsSegmentApi - functional programming interface
 * @export
 */
export const HlsSegmentApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets the specified audio segment for an audio item.
         * @param {string} itemId The item id.
         * @param {string} segmentId The segment id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHlsAudioSegmentLegacyAac(itemId: string, segmentId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await HlsSegmentApiAxiosParamCreator(configuration).getHlsAudioSegmentLegacyAac(itemId, segmentId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets the specified audio segment for an audio item.
         * @param {string} itemId The item id.
         * @param {string} segmentId The segment id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHlsAudioSegmentLegacyMp3(itemId: string, segmentId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await HlsSegmentApiAxiosParamCreator(configuration).getHlsAudioSegmentLegacyMp3(itemId, segmentId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets a hls video playlist.
         * @param {string} itemId The video id.
         * @param {string} playlistId The playlist id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHlsPlaylistLegacy(itemId: string, playlistId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await HlsSegmentApiAxiosParamCreator(configuration).getHlsPlaylistLegacy(itemId, playlistId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets a hls video segment.
         * @param {string} itemId The item id.
         * @param {string} playlistId The playlist id.
         * @param {string} segmentId The segment id.
         * @param {string} segmentContainer The segment container.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHlsVideoSegmentLegacy(itemId: string, playlistId: string, segmentId: string, segmentContainer: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await HlsSegmentApiAxiosParamCreator(configuration).getHlsVideoSegmentLegacy(itemId, playlistId, segmentId, segmentContainer, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Stops an active encoding.
         * @param {string} [deviceId] The device id of the client requesting. Used to stop encoding processes when needed.
         * @param {string} [playSessionId] The play session id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async stopEncodingProcess(deviceId?: string, playSessionId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await HlsSegmentApiAxiosParamCreator(configuration).stopEncodingProcess(deviceId, playSessionId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * HlsSegmentApi - factory interface
 * @export
 */
export const HlsSegmentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Gets the specified audio segment for an audio item.
         * @param {string} itemId The item id.
         * @param {string} segmentId The segment id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHlsAudioSegmentLegacyAac(itemId: string, segmentId: string, options?: any): AxiosPromise<any> {
            return HlsSegmentApiFp(configuration).getHlsAudioSegmentLegacyAac(itemId, segmentId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets the specified audio segment for an audio item.
         * @param {string} itemId The item id.
         * @param {string} segmentId The segment id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHlsAudioSegmentLegacyMp3(itemId: string, segmentId: string, options?: any): AxiosPromise<any> {
            return HlsSegmentApiFp(configuration).getHlsAudioSegmentLegacyMp3(itemId, segmentId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a hls video playlist.
         * @param {string} itemId The video id.
         * @param {string} playlistId The playlist id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHlsPlaylistLegacy(itemId: string, playlistId: string, options?: any): AxiosPromise<any> {
            return HlsSegmentApiFp(configuration).getHlsPlaylistLegacy(itemId, playlistId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a hls video segment.
         * @param {string} itemId The item id.
         * @param {string} playlistId The playlist id.
         * @param {string} segmentId The segment id.
         * @param {string} segmentContainer The segment container.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHlsVideoSegmentLegacy(itemId: string, playlistId: string, segmentId: string, segmentContainer: string, options?: any): AxiosPromise<any> {
            return HlsSegmentApiFp(configuration).getHlsVideoSegmentLegacy(itemId, playlistId, segmentId, segmentContainer, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Stops an active encoding.
         * @param {string} [deviceId] The device id of the client requesting. Used to stop encoding processes when needed.
         * @param {string} [playSessionId] The play session id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stopEncodingProcess(deviceId?: string, playSessionId?: string, options?: any): AxiosPromise<void> {
            return HlsSegmentApiFp(configuration).stopEncodingProcess(deviceId, playSessionId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getHlsAudioSegmentLegacyAac operation in HlsSegmentApi.
 * @export
 * @interface HlsSegmentApiGetHlsAudioSegmentLegacyAacRequest
 */
export interface HlsSegmentApiGetHlsAudioSegmentLegacyAacRequest {
    /**
     * The item id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsAudioSegmentLegacyAac
     */
    readonly itemId: string

    /**
     * The segment id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsAudioSegmentLegacyAac
     */
    readonly segmentId: string
}

/**
 * Request parameters for getHlsAudioSegmentLegacyMp3 operation in HlsSegmentApi.
 * @export
 * @interface HlsSegmentApiGetHlsAudioSegmentLegacyMp3Request
 */
export interface HlsSegmentApiGetHlsAudioSegmentLegacyMp3Request {
    /**
     * The item id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsAudioSegmentLegacyMp3
     */
    readonly itemId: string

    /**
     * The segment id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsAudioSegmentLegacyMp3
     */
    readonly segmentId: string
}

/**
 * Request parameters for getHlsPlaylistLegacy operation in HlsSegmentApi.
 * @export
 * @interface HlsSegmentApiGetHlsPlaylistLegacyRequest
 */
export interface HlsSegmentApiGetHlsPlaylistLegacyRequest {
    /**
     * The video id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsPlaylistLegacy
     */
    readonly itemId: string

    /**
     * The playlist id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsPlaylistLegacy
     */
    readonly playlistId: string
}

/**
 * Request parameters for getHlsVideoSegmentLegacy operation in HlsSegmentApi.
 * @export
 * @interface HlsSegmentApiGetHlsVideoSegmentLegacyRequest
 */
export interface HlsSegmentApiGetHlsVideoSegmentLegacyRequest {
    /**
     * The item id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsVideoSegmentLegacy
     */
    readonly itemId: string

    /**
     * The playlist id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsVideoSegmentLegacy
     */
    readonly playlistId: string

    /**
     * The segment id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsVideoSegmentLegacy
     */
    readonly segmentId: string

    /**
     * The segment container.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsVideoSegmentLegacy
     */
    readonly segmentContainer: string
}

/**
 * Request parameters for stopEncodingProcess operation in HlsSegmentApi.
 * @export
 * @interface HlsSegmentApiStopEncodingProcessRequest
 */
export interface HlsSegmentApiStopEncodingProcessRequest {
    /**
     * The device id of the client requesting. Used to stop encoding processes when needed.
     * @type {string}
     * @memberof HlsSegmentApiStopEncodingProcess
     */
    readonly deviceId?: string

    /**
     * The play session id.
     * @type {string}
     * @memberof HlsSegmentApiStopEncodingProcess
     */
    readonly playSessionId?: string
}

/**
 * HlsSegmentApi - object-oriented interface
 * @export
 * @class HlsSegmentApi
 * @extends {BaseAPI}
 */
export class HlsSegmentApi extends BaseAPI {
    /**
     * 
     * @summary Gets the specified audio segment for an audio item.
     * @param {HlsSegmentApiGetHlsAudioSegmentLegacyAacRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HlsSegmentApi
     */
    public getHlsAudioSegmentLegacyAac(requestParameters: HlsSegmentApiGetHlsAudioSegmentLegacyAacRequest, options?: any) {
        return HlsSegmentApiFp(this.configuration).getHlsAudioSegmentLegacyAac(requestParameters.itemId, requestParameters.segmentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets the specified audio segment for an audio item.
     * @param {HlsSegmentApiGetHlsAudioSegmentLegacyMp3Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HlsSegmentApi
     */
    public getHlsAudioSegmentLegacyMp3(requestParameters: HlsSegmentApiGetHlsAudioSegmentLegacyMp3Request, options?: any) {
        return HlsSegmentApiFp(this.configuration).getHlsAudioSegmentLegacyMp3(requestParameters.itemId, requestParameters.segmentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a hls video playlist.
     * @param {HlsSegmentApiGetHlsPlaylistLegacyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HlsSegmentApi
     */
    public getHlsPlaylistLegacy(requestParameters: HlsSegmentApiGetHlsPlaylistLegacyRequest, options?: any) {
        return HlsSegmentApiFp(this.configuration).getHlsPlaylistLegacy(requestParameters.itemId, requestParameters.playlistId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a hls video segment.
     * @param {HlsSegmentApiGetHlsVideoSegmentLegacyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HlsSegmentApi
     */
    public getHlsVideoSegmentLegacy(requestParameters: HlsSegmentApiGetHlsVideoSegmentLegacyRequest, options?: any) {
        return HlsSegmentApiFp(this.configuration).getHlsVideoSegmentLegacy(requestParameters.itemId, requestParameters.playlistId, requestParameters.segmentId, requestParameters.segmentContainer, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Stops an active encoding.
     * @param {HlsSegmentApiStopEncodingProcessRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HlsSegmentApi
     */
    public stopEncodingProcess(requestParameters: HlsSegmentApiStopEncodingProcessRequest = {}, options?: any) {
        return HlsSegmentApiFp(this.configuration).stopEncodingProcess(requestParameters.deviceId, requestParameters.playSessionId, options).then((request) => request(this.axios, this.basePath));
    }
}
