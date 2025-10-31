/**
 * @typedef {object} HeroAttributes
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {'small'|'medium'|'large'|'half-height'|'fullheight'|'fullheight-with-navbar'} [size]
 */
/**
 * An imposing hero banner to showcase something
 *
 * https://bulma.io/documentation/layout/hero/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & HeroAttributes>}
 */
export const Main: m.Component<import("../attributes.mjs").MbStandardAttributes & HeroAttributes>;
/**
 * https://bulma.io/documentation/layout/hero/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Body: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * https://bulma.io/documentation/layout/hero/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Header: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * https://bulma.io/documentation/layout/hero/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Footer: m.Component<import("../attributes.mjs").MbStandardAttributes>;
export type HeroAttributes = {
    color?: import("../attributes.mjs").Color;
    size?: "small" | "medium" | "large" | "half-height" | "fullheight" | "fullheight-with-navbar";
};
import m from 'mithril';
