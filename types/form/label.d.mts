/**
 * @typedef {object} LabelAttributes
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {import('../attributes.mjs').Color} [color]
 */
/**
 * A label to added to a Field grouping
 *
 * https://bulma.io/documentation/form/general/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & LabelAttributes>}
 */
export const Label: m.Component<import("../attributes.mjs").MbStandardAttributes & LabelAttributes>;
export type LabelAttributes = {
    size?: import("../attributes.mjs").Size;
    color?: import("../attributes.mjs").Color;
};
import m from 'mithril';
