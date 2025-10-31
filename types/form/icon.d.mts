/**
 * @typedef {object} FormIcon
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {'left'|'right'} [side]
 * @prop {'solid'|'regular'|'brand'} [faStyle]
 * @prop {string} [faIcon]
 */
/**
 * An icon to be used within a Control element to add detail to inputs
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & FormIcon>}
 */
export const Icon: m.Component<import("../attributes.mjs").MbStandardAttributes & FormIcon>;
export type FormIcon = {
    color?: import("../attributes.mjs").Color;
    size?: import("../attributes.mjs").Size;
    side?: "left" | "right";
    faStyle?: "solid" | "regular" | "brand";
    faIcon?: string;
};
import m from 'mithril';
