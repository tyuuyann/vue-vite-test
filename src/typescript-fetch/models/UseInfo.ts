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

import { exists, mapValues } from '../runtime';
import type { PaymentList } from './PaymentList';
import {
    PaymentListFromJSON,
    PaymentListFromJSONTyped,
    PaymentListToJSON,
} from './PaymentList';

/**
 * 
 * @export
 * @interface UseInfo
 */
export interface UseInfo {
    /**
     * 
     * @type {string}
     * @memberof UseInfo
     */
    payment: string;
    /**
     * 
     * @type {string}
     * @memberof UseInfo
     */
    creditType: string;
    /**
     * 
     * @type {Array<PaymentList>}
     * @memberof UseInfo
     */
    info: Array<PaymentList>;
}

/**
 * Check if a given object implements the UseInfo interface.
 */
export function instanceOfUseInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "payment" in value;
    isInstance = isInstance && "creditType" in value;
    isInstance = isInstance && "info" in value;

    return isInstance;
}

export function UseInfoFromJSON(json: any): UseInfo {
    return UseInfoFromJSONTyped(json, false);
}

export function UseInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UseInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'payment': json['payment'],
        'creditType': json['creditType'],
        'info': ((json['info'] as Array<any>).map(PaymentListFromJSON)),
    };
}

export function UseInfoToJSON(value?: UseInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payment': value.payment,
        'creditType': value.creditType,
        'info': ((value.info as Array<any>).map(PaymentListToJSON)),
    };
}

