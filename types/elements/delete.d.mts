/**
 * @typedef {object} DeleteAttributes
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {(e: Event)=> void} [onclick]
 */
/**
 * A versatile delete cross
 *
 * The delete element is a stand-alone element that can be used in different contexts.
 *
 * https://bulma.io/documentation/elements/delete/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & DeleteAttributes>}
 */
export const Delete: m.Component<import("../attributes.mjs").MbStandardAttributes & DeleteAttributes>;
export type DeleteAttributes = {
    size?: import("../attributes.mjs").Size;
    onclick?: (e: Event) => void;
};
import m from 'mithril';
