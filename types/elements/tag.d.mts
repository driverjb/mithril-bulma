/**
 * @typedef {object} BasicTagAttributes
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {import('../attributes.mjs').Tint} [tint]
 * @prop {"normal"|"medium"|"large"} [size]
 * @prop {boolean} [rounded]
 * @prop {boolean} [hoverable]
 * @prop {'a'|'button'|'div'|'span'} [element]
 */
/**
 * Small tag labels to insert anywhere
 *
 * The Bulma tag is a small but versatile element. It's very useful as a way to attach information
 * to a block or other component. Its size makes it also easy to display in numbers, making it
 * appropriate for long lists of items.
 *
 * https://bulma.io/documentation/elements/tag/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & BasicTagAttributes>}
 */
export const Simple: m.Component<import("../attributes.mjs").MbStandardAttributes & BasicTagAttributes>;
/**
 * A tag that allows for multiple tags to be grouped together as if they were a single tag. Allows
 * you to make singe tags with 2 colors and different text. Like [build|npm], etc.
 *
 * https://bulma.io/documentation/elements/tag/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Multipart: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * @typedef {object} TagGroupAttributes
 * @prop {boolean} [multiline]
 */
/**
 * Allows you to group tags together so that they flow with nice spacing and will spill over to
 * multiple lines if needed.
 *
 * https://bulma.io/documentation/elements/tag/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & TagGroupAttributes>}
 */
export const List: m.Component<import("../attributes.mjs").MbStandardAttributes & TagGroupAttributes>;
export type BasicTagAttributes = {
    size?: import("../attributes.mjs").Size;
    color?: import("../attributes.mjs").Color;
    tint?: import("../attributes.mjs").Tint;
    rounded?: boolean;
    hoverable?: boolean;
    element?: "a" | "button" | "div" | "span";
};
export type TagGroupAttributes = {
    multiline?: boolean;
};
import m from 'mithril';
