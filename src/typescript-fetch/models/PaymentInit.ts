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
import type { UseInfo } from './UseInfo';
import {
    UseInfoFromJSON,
    UseInfoFromJSONTyped,
    UseInfoToJSON,
} from './UseInfo';

/**
 * 
 * @export
 * @interface PaymentInit
 */
export interface PaymentInit {
    /**
     * 
     * @type {string}
     * @memberof PaymentInit
     */
    totalPayment: string;
    /**
     * 
     * @type {Array<UseInfo>}
     * @memberof PaymentInit
     */
    info: Array<UseInfo>;
}

/**
 * Check if a given object implements the PaymentInit interface.
 */
export function instanceOfPaymentInit(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "totalPayment" in value;
    isInstance = isInstance && "info" in value;

    return isInstance;
}

export function PaymentInitFromJSON(json: any): PaymentInit {
    return PaymentInitFromJSONTyped(json, false);
}

export function PaymentInitFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentInit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalPayment': json['totalPayment'],
        'info': ((json['info'] as Array<any>).map(UseInfoFromJSON)),
    };
}

export function PaymentInitToJSON(value?: PaymentInit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalPayment': value.totalPayment,
        'info': ((value.info as Array<any>).map(UseInfoToJSON)),
    };
}
