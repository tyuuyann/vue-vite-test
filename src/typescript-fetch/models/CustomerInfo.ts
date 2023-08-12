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
 * @interface CustomerInfo
 */
export interface CustomerInfo {
    /**
     * 
     * @type {string}
     * @memberof CustomerInfo
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerInfo
     */
    lastName: string;
}

/**
 * Check if a given object implements the CustomerInfo interface.
 */
export function instanceOfCustomerInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "lastName" in value;

    return isInstance;
}

export function CustomerInfoFromJSON(json: any): CustomerInfo {
    return CustomerInfoFromJSONTyped(json, false);
}

export function CustomerInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': json['first_name'],
        'lastName': json['last_name'],
    };
}

export function CustomerInfoToJSON(value?: CustomerInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
    };
}
