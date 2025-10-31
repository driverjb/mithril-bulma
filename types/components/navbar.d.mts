/**
 * A responsive horizontal navbar that can support images, links, buttons, and dropdowns
 *
 * https://bulma.io/documentation/components/navbar/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & {fixed: "top"|"bottom"}>}
 */
export const Main: m.Component<import("../attributes.mjs").MbStandardAttributes & {
    fixed: "top" | "bottom";
}>;
/**
 * @typedef {object} NavbarBrandAttributes
 * @prop {(e: Event)=>void} [onclick]
 */
/**
 * Most commonly contains a link with a nested image
 *
 * https://bulma.io/documentation/components/navbar/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & NavbarBrandAttributes>}
 */
export const Brand: m.Component<import("../attributes.mjs").MbStandardAttributes & NavbarBrandAttributes>;
/**
 * The menu option portion of the navbar (this part will be hidden on mobile unless clicked)
 *
 * https://bulma.io/documentation/components/navbar/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & {id: string}>}
 */
export const Menu: m.Component<import("../attributes.mjs").MbStandardAttributes & {
    id: string;
}>;
/**
 * The left side of the menu
 *
 * https://bulma.io/documentation/components/navbar/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Start: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * The right side of the menu
 *
 * https://bulma.io/documentation/components/navbar/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const End: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * @typedef {object} NavbarItemAttributes
 * @prop {boolean} [hardLink]
 * @prop {string} [href]
 */
/**
 * A menu item
 *
 * https://bulma.io/documentation/components/navbar/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & NavbarItemAttributes>}
 */
export const Item: m.Component<import("../attributes.mjs").MbStandardAttributes & NavbarItemAttributes>;
/**
 * @typedef {object} DropdownAttributes
 * @prop {string} name
 * @prop {boolean} [hoverable]
 */
/**
 * Navbar dropdown — supports hoverable and click modes.
 *
 * https://bulma.io/documentation/components/navbar/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & DropdownAttributes>}
 */
export const Dropdown: m.Component<import("../attributes.mjs").MbStandardAttributes & DropdownAttributes>;
/**
 * A divider line to place on the menu
 *
 * https://bulma.io/documentation/components/navbar/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Divider: m.Component<import("../attributes.mjs").MbStandardAttributes>;
export type NavbarBrandAttributes = {
    onclick?: (e: Event) => void;
};
export type NavbarItemAttributes = {
    hardLink?: boolean;
    href?: string;
};
export type DropdownAttributes = {
    name: string;
    hoverable?: boolean;
};
