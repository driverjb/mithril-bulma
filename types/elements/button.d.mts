/**
 * The classic button, in different colors, sizes, and states
 *
 * The button is an essential element of any design. It's meant to look and behave as an interactive element of your page.
 *
 * https://bulma.io/documentation/elements/button/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & ButtonAttributes>}
 */
export const Button: m.Component<import("../attributes.mjs").MbStandardAttributes & ButtonAttributes>;
export type ButtonAttributes = {
    type?: "anchor" | "button" | "submit" | "reset";
    color?: import("../attributes.mjs").Color;
    tint?: import("../attributes.mjs").Tint;
    size?: import("../attributes.mjs").Size;
    fullwidth?: boolean;
    responsive?: boolean;
    outlined?: boolean;
    inverted?: boolean;
    rounded?: boolean;
    loading?: boolean;
    static?: boolean;
    disabled?: boolean;
    onclick?: (e: Event) => void;
};
import m from 'mithril';
