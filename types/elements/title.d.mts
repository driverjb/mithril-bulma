/**
 * @typedef {object} TitleAttributes
 * @prop {1|2|3|4|5|6} [level]
 */
/**
 * Simple headings to add depth to your page
 *
 * https://bulma.io/documentation/elements/title/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & TitleAttributes>}
 */
export const Title: m.Component<import("../attributes.mjs").MbStandardAttributes & TitleAttributes>;
/**
 * A standard Subtitle
 *
 * https://bulma.io/documentation/elements/title/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & TitleAttributes>}
 */
export const Subtitle: m.Component<import("../attributes.mjs").MbStandardAttributes & TitleAttributes>;
/**
 * @typedef {object} TitleGroupAttributes
 * @prop {1|2|3|4} [level]
 * @prop {string} title
 * @prop {string} subtitle
 */
/**
 * A pair of title and subtitle sized and spaced as recommended by bulma
 *
 * https://bulma.io/documentation/elements/title/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & TitleGroupAttributes>}
 */
export const TitleGroup: m.Component<import("../attributes.mjs").MbStandardAttributes & TitleGroupAttributes>;
export type TitleAttributes = {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
};
export type TitleGroupAttributes = {
    level?: 1 | 2 | 3 | 4;
    title: string;
    subtitle: string;
};
import m from 'mithril';
