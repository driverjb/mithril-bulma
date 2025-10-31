/**
 * @typedef {object} LevelAttributes
 * @prop {boolean} [mobile]
 */
/**
 * A multi-purpose horizontal level, which can contain almost any other element
 *
 * https://bulma.io/documentation/layout/level/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & LevelAttributes>}
 */
export const Main: m.Component<import("../attributes.mjs").MbStandardAttributes & LevelAttributes>;
/**
 * https://bulma.io/documentation/layout/level/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Left: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * https://bulma.io/documentation/layout/level/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Right: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * @typedef {object} LevelItemAttributes
 * @prop {boolean} [centered]
 */
/**
 * https://bulma.io/documentation/layout/level/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & LevelItemAttributes>}
 */
export const Item: m.Component<import("../attributes.mjs").MbStandardAttributes & LevelItemAttributes>;
export type LevelAttributes = {
    mobile?: boolean;
};
export type LevelItemAttributes = {
    centered?: boolean;
};
