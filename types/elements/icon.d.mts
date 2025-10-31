/**
 * Compatible with all icon font libraries, including Font Awesome 5
 *
 * The icon element is a container for any type of icon font. Because the icons can take a few
 * seconds to load, and because you want control over the space the icons will take, you can use the
 * icon class as a reliable square container that will prevent the page to "jump" on page load.
 *
 * https://bulma.io/documentation/elements/icon/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & IconSettings>}
 */
export const Icon: m.Component<import("../attributes.mjs").MbStandardAttributes & IconSettings>;
/**
 * Put this inside the IconGroup element to add a label to an Icon
 *
 * https://bulma.io/documentation/elements/icon/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const IconLabel: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * If you need to add a label to your icon, start with this element.
 *
 * https://bulma.io/documentation/elements/icon/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & {inline: boolean}>}
 */
export const IconGroup: m.Component<import("../attributes.mjs").MbStandardAttributes & {
    inline: boolean;
}>;
export type IconSettings = {
    type?: "regular" | "solid" | "brands";
    icon?: string;
    iconSize?: "small" | "medium" | "large";
    frameSize?: "small" | "medium" | "large";
    border?: boolean;
    animated?: "spinner" | "pulse";
};
import m from 'mithril';
