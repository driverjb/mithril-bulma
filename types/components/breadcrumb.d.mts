/**
 * @typedef {object} BreadcrumbItemAttributes
 * @prop {string} href
 * @prop {string} [faIcon]
 * @prop {"regular"|"solid"} [faStyle]
 */
/**
 * @typedef {object} BreadcrumbAttributes
 * @prop {"left"|"centered"|"right"} [alignment]
 * @prop {"arrow"|"dot"|"bullet"|"succeeds"} [separator]
 * @prop {"small"|"medium"|"large"} [size]
 * @prop {string} [class]
 */
/**
 * A simple breadcrumb component to improve your navigation experience
 *
 * https://bulma.io/documentation/components/breadcrumb/
 *
 * @type {m.Component<BreadcrumbAttributes>}
 */
export const Main: m.Component<BreadcrumbAttributes>;
/**
 * A breadcrumb item
 *
 * https://bulma.io/documentation/components/breadcrumb/
 *
 * @type {m.Component<BreadcrumbItemAttributes>}
 */
export const Item: m.Component<BreadcrumbItemAttributes>;
export type BreadcrumbItemAttributes = {
    href: string;
    faIcon?: string;
    faStyle?: "regular" | "solid";
};
export type BreadcrumbAttributes = {
    alignment?: "left" | "centered" | "right";
    separator?: "arrow" | "dot" | "bullet" | "succeeds";
    size?: "small" | "medium" | "large";
    class?: string;
};
import m from 'mithril';
