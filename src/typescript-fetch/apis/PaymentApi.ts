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
  PaymentInit,
} from '../models';
import {
    PaymentInitFromJSON,
    PaymentInitToJSON,
} from '../models';

/**
 * 
 */
export class PaymentApi extends runtime.BaseAPI {

    /**
     * ログインに必要な情報を取得する
     * ログイン処理
     */
    async paymentInitGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentInit>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // token authentication
        }

        const response = await this.request({
            path: `/payment/init/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentInitFromJSON(jsonValue));
    }

    /**
     * ログインに必要な情報を取得する
     * ログイン処理
     */
    async paymentInitGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentInit> {
        const response = await this.paymentInitGetRaw(initOverrides);
        return await response.value();
    }

}
