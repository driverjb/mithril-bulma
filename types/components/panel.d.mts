/**
 * @typedef {object} PanelAttributes
 * @prop {import('../attributes.mjs').Color} [color]
 */
/**
 * A composable panel, for compact controls
 *
 * https://bulma.io/documentation/components/panel/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & PanelAttributes>}
 */
export const Main: m.Component<import("../attributes.mjs").MbStandardAttributes & PanelAttributes>;
/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Header: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Block: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const TabGroup: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Tab: m.Component<import("../attributes.mjs").MbStandardAttributes>;
export type PanelAttributes = {
    color?: import("../attributes.mjs").Color;
};
import m from 'mithril';
