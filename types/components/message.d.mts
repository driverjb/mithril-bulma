/**
 * @typedef {object} MessageAttributes
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {import('../attributes.mjs').Size} [size]
 */
/**
 * Colored message blocks, to emphasize part of your page
 *
 * https://bulma.io/documentation/components/message/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & MessageAttributes>}
 */
export const Main: m.Component<import("../attributes.mjs").MbStandardAttributes & MessageAttributes>;
/**
 * Header container for Message
 *
 * https://bulma.io/documentation/components/message/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Header: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * Body container for Message
 *
 * https://bulma.io/documentation/components/message/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Body: m.Component<import("../attributes.mjs").MbStandardAttributes>;
export type MessageAttributes = {
    color?: import("../attributes.mjs").Color;
    size?: import("../attributes.mjs").Size;
};
import m from 'mithril';
