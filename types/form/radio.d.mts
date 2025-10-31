/**
 * @typedef {object} RadioAutoFunctions
 * @property {()=>string|number|null} getSelectedValue
 * @property {(v:string|number)=>void} setSelectedValue
 */
/**
 * @typedef {m.Component<import('../attributes.mjs').MbStandardAttributes & RadioAttributes> & RadioAutoFunctions} RadioAutoComponent
 */
/**
 * Creates a radio group that provides programatic access to its value
 *
 * https://bulma.io/documentation/form/radio/
 *
 * @param {RadioAttributes} [c]
 * @returns {RadioAutoComponent}
 */
export function RadioGroupAuto(c?: RadioAttributes): RadioAutoComponent;
/**
 * @typedef {object} RadioEntry
 * @prop {string} [display]
 * @prop {string} [value]
 * @prop {boolean} [disabled]
 */
/**
 * @typedef {object} RadioAttributes
 * @prop {RadioEntry[]} [entries]
 * @prop {string} [group]
 * @prop {(value:string)=>void} [onselect]
 * @prop {string|number} [selected]
 */
/**
 * The mutually exclusive radio buttons in their native format
 *
 * https://bulma.io/documentation/form/radio/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & RadioAttributes>}
 */
export const RadioGroup: m.Component<import("../attributes.mjs").MbStandardAttributes & RadioAttributes>;
export type RadioAutoFunctions = {
    getSelectedValue: () => string | number | null;
    setSelectedValue: (v: string | number) => void;
};
export type RadioAutoComponent = m.Component<import("../attributes.mjs").MbStandardAttributes & RadioAttributes> & RadioAutoFunctions;
export type RadioEntry = {
    display?: string;
    value?: string;
    disabled?: boolean;
};
export type RadioAttributes = {
    entries?: RadioEntry[];
    group?: string;
    onselect?: (value: string) => void;
    selected?: string | number;
};
import m from 'mithril';
