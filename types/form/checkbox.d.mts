/**
 * The 2-state checkbox in its native format. This version creates a component via function call and
 * that component has its own internal state with a value that can be read and manipulated
 * programatically.
 *
 * https://bulma.io/documentation/form/checkbox/
 *
 * @param {boolean} initialValue
 * @returns {m.Component<import('../attributes.mjs').MbStandardAttributes & CheckboxAttributes> & {isChecked: ()=>boolean, setChecked: (v: boolean)=>void}}
 */
export function CheckboxAuto(initialValue?: boolean): m.Component<import("../attributes.mjs").MbStandardAttributes & CheckboxAttributes> & {
    isChecked: () => boolean;
    setChecked: (v: boolean) => void;
};
/**
 * @typedef {object} CheckboxAttributes
 * @prop {(e:Event)=>void} [oninput]
 * @prop {boolean} [checked]
 * @prop {boolean} [disabled]
 */
/**
 * The 2-state checkbox in its native format
 *
 * https://bulma.io/documentation/form/checkbox/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & CheckboxAttributes>}
 */
export const Checkbox: m.Component<import("../attributes.mjs").MbStandardAttributes & CheckboxAttributes>;
/**
 * A list of checkboxes
 *
 * https://bulma.io/documentation/form/checkbox/#list-of-checkboxes
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const CheckboxGroup: m.Component<import("../attributes.mjs").MbStandardAttributes>;
export type CheckboxAttributes = {
    oninput?: (e: Event) => void;
    checked?: boolean;
    disabled?: boolean;
};
import m from 'mithril';
