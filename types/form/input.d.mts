/**
 * Creates a text element that allows for programatic access to its value.
 *
 * https://bulma.io/documentation/form/input/
 *
 * @param {InputAttributes} [config]
 * @param {string} [initalValue]
 * @returns {m.Component<import('../attributes.mjs').MbStandardAttributes & InputAttributes> & {getValue: ()=>string, setValue: (newValue: string)=>void}}
 */
export function InputAuto(config?: InputAttributes, initalValue?: string): m.Component<import("../attributes.mjs").MbStandardAttributes & InputAttributes> & {
    getValue: () => string;
    setValue: (newValue: string) => void;
};
/**
 * @typedef {object} InputAttributes
 * @prop {'text'|'password'|'date'|'time'|'datetime-local'|'email'|'number'|'range'|'month'|'week'|'color'} [type]
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {string} [placeholder]
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {(e:Event)=>void} [oninput]
 * @prop {string} [value]
 * @prop {number} [min]
 * @prop {number} [max]
 * @prop {number} [step]
 * @prop {boolean} [rounded]
 * @prop {boolean} [loading]
 * @prop {boolean} [disabled]
 * @prop {boolean} [readonly]
 * @prop {boolean} [isStatic]
 * @prop {boolean} [focused]
 */
/**
 * The text input and its variations
 *
 * https://bulma.io/documentation/form/input/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & InputAttributes>}
 */
export const Input: m.Component<import("../attributes.mjs").MbStandardAttributes & InputAttributes>;
export type InputAttributes = {
    type?: "text" | "password" | "date" | "time" | "datetime-local" | "email" | "number" | "range" | "month" | "week" | "color";
    color?: import("../attributes.mjs").Color;
    placeholder?: string;
    size?: import("../attributes.mjs").Size;
    oninput?: (e: Event) => void;
    value?: string;
    min?: number;
    max?: number;
    step?: number;
    rounded?: boolean;
    loading?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    isStatic?: boolean;
    focused?: boolean;
};
