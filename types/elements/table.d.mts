/**
 * @typedef {object} TableColor
 * @prop {import('../attributes.mjs').Color} [color]
 */
/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const ScrollableWrapper: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & {bordered:boolean, striped: boolean, narrow: boolean, hoverable: boolean, fullwidth: boolean, scrollable: boolean}>}
 */
export const Main: m.Component<import("../attributes.mjs").MbStandardAttributes & {
    bordered: boolean;
    striped: boolean;
    narrow: boolean;
    hoverable: boolean;
    fullwidth: boolean;
    scrollable: boolean;
}>;
/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Body: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Head: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Foot: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & TableColor & {selected: boolean}>}
 */
export const Row: m.Component<import("../attributes.mjs").MbStandardAttributes & TableColor & {
    selected: boolean;
}>;
/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & TableColor>}
 */
export const Cell: m.Component<import("../attributes.mjs").MbStandardAttributes & TableColor>;
/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & TableColor>}
 */
export const HeaderCell: m.Component<import("../attributes.mjs").MbStandardAttributes & TableColor>;
export type TableColor = {
    color?: import("../attributes.mjs").Color;
};
