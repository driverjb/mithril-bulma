/**
 * @typedef {object} FieldAttributes
 * @prop {boolean} [grouped]
 * @prop {boolean} [multiline]
 * @prop {boolean} [addons]
 * @prop {import('../attributes.mjs').Alignment} [alignment]
 * @prop {boolean} [horizontal]
 * @prop {import('../attributes.mjs').Size} [size]
 */
/**
 * A wrapper that allows you to include many details around an input element. For example:
 *   - Form.Field
 *     - Form.Control
 *       - Form.Input
 *       - Form.Icon
 *     - Form.Help
 *
 * https://bulma.io/documentation/form/general/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & FieldAttributes>}
 */
export const Field: m.Component<import("../attributes.mjs").MbStandardAttributes & FieldAttributes>;
export type FieldAttributes = {
    grouped?: boolean;
    multiline?: boolean;
    addons?: boolean;
    alignment?: import("../attributes.mjs").Alignment;
    horizontal?: boolean;
    size?: import("../attributes.mjs").Size;
};
import m from 'mithril';
