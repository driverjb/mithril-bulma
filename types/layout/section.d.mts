/**
 * @typedef {object} SectionAttributes
 * @prop {'medium'|'large'} [spacing]
 */
/**
 * A simple container to divide your page into sections, like the one you’re currently reading
 *
 * https://bulma.io/documentation/layout/section/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & SectionAttributes>}
 */
export const Section: m.Component<import("../attributes.mjs").MbStandardAttributes & SectionAttributes>;
export type SectionAttributes = {
    spacing?: "medium" | "large";
};
import m from 'mithril';
