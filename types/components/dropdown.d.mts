/**
 * @typedef {object} DropdownAttributes
 * @prop {boolean} [active]
 * @prop {boolean} [hoverable]
 * @prop {boolean} [dropup]
 * @prop {boolean} [right]
 */
/**
 * Main dropdown component that wraps all the internal components
 *
 * An interactive dropdown menu for discoverable content
 *
 * https://bulma.io/documentation/components/dropdown/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & DropdownAttributes>}
 */
export const Main: m.Component<import("../attributes.mjs").MbStandardAttributes & DropdownAttributes>;
/**
 * Dropdown trigger component. Most commonly will have a button with icon as a child component.
 *
 * https://bulma.io/documentation/components/dropdown/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Trigger: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * Container that hides/displays the selectable options
 *
 * https://bulma.io/documentation/components/dropdown/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Content: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * Dropdown menu item which should be nested in Dropdown.Content
 *
 * https://bulma.io/documentation/components/dropdown/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Item: m.Component<import("../attributes.mjs").MbStandardAttributes>;
export type DropdownAttributes = {
    active?: boolean;
    hoverable?: boolean;
    dropup?: boolean;
    right?: boolean;
};
import m from 'mithril';
