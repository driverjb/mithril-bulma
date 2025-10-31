/**
 * @typedef {object} PaginationAttributes
 * @prop {boolean} [rounded]
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {boolean} [centered]
 */
/**
 * A responsive, usable, and flexible pagination
 *
 * https://bulma.io/documentation/components/pagination/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & PaginationAttributes>}
 */
export const Main: m.Component<import("../attributes.mjs").MbStandardAttributes & PaginationAttributes>;
/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Previous: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Next: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const PageList: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Item: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Elipsis: m.Component<import("../attributes.mjs").MbStandardAttributes>;
export type PaginationAttributes = {
    rounded?: boolean;
    size?: import("../attributes.mjs").Size;
    centered?: boolean;
};
import m from 'mithril';
