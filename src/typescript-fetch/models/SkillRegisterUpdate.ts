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
 * @interface SkillRegisterUpdate
 */
export interface SkillRegisterUpdate {
    /**
     * 成功フラグ
     * @type {string}
     * @memberof SkillRegisterUpdate
     */
    successFlg: string;
}

/**
 * Check if a given object implements the SkillRegisterUpdate interface.
 */
export function instanceOfSkillRegisterUpdate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "successFlg" in value;

    return isInstance;
}

export function SkillRegisterUpdateFromJSON(json: any): SkillRegisterUpdate {
    return SkillRegisterUpdateFromJSONTyped(json, false);
}

export function SkillRegisterUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SkillRegisterUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'successFlg': json['successFlg'],
    };
}

export function SkillRegisterUpdateToJSON(value?: SkillRegisterUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'successFlg': value.successFlg,
    };
}

