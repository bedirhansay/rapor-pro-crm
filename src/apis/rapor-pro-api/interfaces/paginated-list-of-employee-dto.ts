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


// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeDto } from './employee-dto';

/**
 * 
 * @export
 * @interface PaginatedListOfEmployeeDto
 */
export interface PaginatedListOfEmployeeDto {
    /**
     * 
     * @type {Array<EmployeeDto>}
     * @memberof PaginatedListOfEmployeeDto
     */
    'items'?: Array<EmployeeDto>;
    /**
     * 
     * @type {number}
     * @memberof PaginatedListOfEmployeeDto
     */
    'pageNumber'?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginatedListOfEmployeeDto
     */
    'totalPages'?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginatedListOfEmployeeDto
     */
    'totalCount'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PaginatedListOfEmployeeDto
     */
    'hasPreviousPage'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PaginatedListOfEmployeeDto
     */
    'hasNextPage'?: boolean;
}

