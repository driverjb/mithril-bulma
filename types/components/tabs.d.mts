/**
 * @typedef {object} TabsAttributes
 * @prop {'centered'|'right'|'left'} [align]
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {'boxed'|'toggle'|'toggle-rounded'} [theme]
 * @prop {boolean} [fullwidth]
 */
/**
 * Simple responsive horizontal navigation tabs, with different styles
 *
 * https://bulma.io/documentation/components/tabs/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & TabsAttributes>}
 */
export const Main: m.Component<import("../attributes.mjs").MbStandardAttributes & TabsAttributes>;
/**
 * An entry in a list of tabs
 *
 * https://bulma.io/documentation/components/tabs/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & {active: boolean, onclick: (e: Event)=>void}>}
 */
export const Entry: m.Component<import("../attributes.mjs").MbStandardAttributes & {
    active: boolean;
    onclick: (e: Event) => void;
}>;
export type TabsAttributes = {
    align?: "centered" | "right" | "left";
    size?: import("../attributes.mjs").Size;
    theme?: "boxed" | "toggle" | "toggle-rounded";
    fullwidth?: boolean;
};
