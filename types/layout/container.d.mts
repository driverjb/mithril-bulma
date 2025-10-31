/**
 * @typedef {object} ContainerAttributes
 * @prop {'widescreen'|'fullhd'|'max-desktop'|'max-widescreen'|'max-tablet'|'fluid'} [breakpoint]
 */
/**
 * A simple container to center your content horizontally
 *
 * https://bulma.io/documentation/layout/container/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & ContainerAttributes>}
 */
export const Container: m.Component<import("../attributes.mjs").MbStandardAttributes & ContainerAttributes>;
export type ContainerAttributes = {
    breakpoint?: "widescreen" | "fullhd" | "max-desktop" | "max-widescreen" | "max-tablet" | "fluid";
};
