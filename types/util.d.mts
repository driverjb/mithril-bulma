/**
 * Apply the is-{something} pattern to boolean and string values. Use the function like this:
 * const arrayOfStrings = is({rounded, color})
 * ['is-rounded', 'is-primary']
 * @param {{[key: string]: number|boolean|string}} opt
 * @returns {string[]}
 */
export function is(opt?: {
    [key: string]: number | boolean | string;
}): string[];
/**
 * Apply the has-{something} pattern to boolean and string values. Use the function like this:
 * const arrayOfStrings = is({color, addons})
 * ['has-text-primary', 'has-addons']
 * @param {{[key: string]: number|boolean|string}} opt
 * @returns {string[]}
 */
export function has(opt?: {
    [key: string]: number | boolean | string;
}): string[];
/**
 *
 * @param {import('./attributes.mjs').MbStandardAttributes} a
 * @returns {string[]}
 */
export function extractClasses(a: import("./attributes.mjs").MbStandardAttributes): string[];
/**
 * Convert an array of strings and nulls into a class string for use with HTML
 * @param {(Array<string|null>|string|null)[]} arrClasses
 */
export function toClass(...arrClasses: (Array<string | null> | string | null)[]): string;
export const NBSP: "\u00A0";
