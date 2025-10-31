/**
 * @typedef {object} ControlAttributes
 * @prop {boolean} [loading]
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {boolean} [iconLeft]
 * @prop {boolean} [iconRight]
 */
/**
 * A wrapper for other form elements that gives additional formatting and settings. Particularly if
 * you want to overaly icons on top.
 *
 * https://bulma.io/documentation/form/general/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & ControlAttributes>}
 */
export const Control: m.Component<import("../attributes.mjs").MbStandardAttributes & ControlAttributes>;
export type ControlAttributes = {
    loading?: boolean;
    size?: import("../attributes.mjs").Size;
    iconLeft?: boolean;
    iconRight?: boolean;
};
