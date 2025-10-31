/**
 * @typedef {object} ProgressAttributes
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {number} [max]
 * @prop {number} [value]
 * @prop {boolean} [fullWidth]
 */
/**
 * Native HTML progress bars
 *
 * The Bulma progress bar is a simple CSS class that styles the native <progress> HTML element.
 *
 * https://bulma.io/documentation/elements/progress/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & ProgressAttributes>}
 */
export const Progress: m.Component<import("../attributes.mjs").MbStandardAttributes & ProgressAttributes>;
export type ProgressAttributes = {
    size?: import("../attributes.mjs").Size;
    color?: import("../attributes.mjs").Color;
    max?: number;
    value?: number;
    fullWidth?: boolean;
};
import m from 'mithril';
