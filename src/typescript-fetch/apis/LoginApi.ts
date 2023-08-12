/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Generator Kotlin Sample
 * OpenAPI Generator を用いた自動生成のサンプルコードです
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  LoginUsers,
} from '../models';
import {
    LoginUsersFromJSON,
    LoginUsersToJSON,
} from '../models';

/**
 * 
 */
export class LoginApi extends runtime.BaseAPI {

    /**
     * ログインに必要な情報を取得する
     * ログイン処理
     */
    async loginPostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // token authentication
        }

        const response = await this.request({
            path: `/login/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * ログインに必要な情報を取得する
     * ログイン処理
     */
    async loginPost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.loginPostRaw(initOverrides);
    }

    /**
     * ログインに必要な情報を取得する
     * ログイン処理
     */
    async loginUsersPostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoginUsers>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // token authentication
        }

        const response = await this.request({
            path: `/login-users/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginUsersFromJSON(jsonValue));
    }

    /**
     * ログインに必要な情報を取得する
     * ログイン処理
     */
    async loginUsersPost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoginUsers> {
        const response = await this.loginUsersPostRaw(initOverrides);
        return await response.value();
    }

}