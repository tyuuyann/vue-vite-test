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
/**
 * 
 * @export
 * @interface PaymentList
 */
export interface PaymentList {
    /**
     * 
     * @type {string}
     * @memberof PaymentList
     */
    useDay: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentList
     */
    useStore: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentList
     */
    payment: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentList
     */
    codeId: string;
}

/**
 * Check if a given object implements the PaymentList interface.
 */
export function instanceOfPaymentList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "useDay" in value;
    isInstance = isInstance && "useStore" in value;
    isInstance = isInstance && "payment" in value;
    isInstance = isInstance && "codeId" in value;

    return isInstance;
}

export function PaymentListFromJSON(json: any): PaymentList {
    return PaymentListFromJSONTyped(json, false);
}

export function PaymentListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'useDay': json['useDay'],
        'useStore': json['useStore'],
        'payment': json['payment'],
        'codeId': json['codeId'],
    };
}

export function PaymentListToJSON(value?: PaymentList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'useDay': value.useDay,
        'useStore': value.useStore,
        'payment': value.payment,
        'codeId': value.codeId,
    };
}

