/**
 * @typedef {object} SelectAutoFunctions
 * @param {()=>string} getSelectedValue
 * @param {()=>number} getSelectedIndex
 */
/**
 * Creates a select component that provides programatic access to its value
 *
 * https://bulma.io/documentation/form/select/
 *
 * @param {SelectAttributes} c
 * @returns {m.Component<import('../attributes.mjs').MbStandardAttributes & SelectAttributes> & SelectAutoFunctions}
 */
export function SelectAuto(c?: SelectAttributes): m.Component<import("../attributes.mjs").MbStandardAttributes & SelectAttributes> & SelectAutoFunctions;
/**
 * @typedef {object} SelectAttributes
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {number} [multiple]
 * @prop {boolean} [rounded]
 * @prop {boolean} [loading]
 * @prop {boolean} [focused]
 * @prop {(e:Event)=>void} [onselect]
 */
/**
 * The browser built-in select dropdown, styled accordingly
 *
 * https://bulma.io/documentation/form/select/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & SelectAttributes>}
 */
export const Select: m.Component<import("../attributes.mjs").MbStandardAttributes & SelectAttributes>;
export type SelectAutoFunctions = object;
export type SelectAttributes = {
    color?: import("../attributes.mjs").Color;
    size?: import("../attributes.mjs").Size;
    multiple?: number;
    rounded?: boolean;
    loading?: boolean;
    focused?: boolean;
    onselect?: (e: Event) => void;
};
