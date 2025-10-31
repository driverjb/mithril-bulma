/**
 * @typedef {'has-1-cols'|'has-1-cols-mobile'|'has-1-cols-tablet'|'has-1-cols-desktop'|'has-1-cols-widescreen'|'has-1-cols-fullhd'|'has-2-cols'|'has-2-cols-mobile'|'has-2-cols-tablet'|'has-2-cols-desktop'|'has-2-cols-widescreen'|'has-2-cols-fullhd'|'has-3-cols'|'has-3-cols-mobile'|'has-3-cols-tablet'|'has-3-cols-desktop'|'has-3-cols-widescreen'|'has-3-cols-fullhd'|'has-4-cols'|'has-4-cols-mobile'|'has-4-cols-tablet'|'has-4-cols-desktop'|'has-4-cols-widescreen'|'has-4-cols-fullhd'|'has-5-cols'|'has-5-cols-mobile'|'has-5-cols-tablet'|'has-5-cols-desktop'|'has-5-cols-widescreen'|'has-5-cols-fullhd'|'has-6-cols'|'has-6-cols-mobile'|'has-6-cols-tablet'|'has-6-cols-desktop'|'has-6-cols-widescreen'|'has-6-cols-fullhd'|'has-7-cols'|'has-7-cols-mobile'|'has-7-cols-tablet'|'has-7-cols-desktop'|'has-7-cols-widescreen'|'has-7-cols-fullhd'|'has-8-cols'|'has-8-cols-mobile'|'has-8-cols-tablet'|'has-8-cols-desktop'|'has-8-cols-widescreen'|'has-8-cols-fullhd'|'has-9-cols'|'has-9-cols-mobile'|'has-9-cols-tablet'|'has-9-cols-desktop'|'has-9-cols-widescreen'|'has-9-cols-fullhd'|'has-10-cols'|'has-10-cols-mobile'|'has-10-cols-tablet'|'has-10-cols-desktop'|'has-10-cols-widescreen'|'has-10-cols-fullhd'|'has-11-cols'|'has-11-cols-mobile'|'has-11-cols-tablet'|'has-11-cols-desktop'|'has-11-cols-widescreen'|'has-11-cols-fullhd'|'has-12-cols'|'has-12-cols-mobile'|'has-12-cols-tablet'|'has-12-cols-desktop'|'has-12-cols-widescreen'|'has-12-cols-fullhd'} FixedGridColumn
 */
/**
 * @typedef {object} FixedGridAttributes
 * @prop {FixedGridColumn|FixedGridColumn[]} [columnSize]
 * @prop {boolean} [autoBreakpoint] mobile: 2 cols, tablet: 4 cols, desktop: 8 cols, widescreen: 12 cols, fullhd: 16 cols
 */
/**
 * A customizable 2D fixed grid
 *
 * https://bulma.io/documentation/grid/fixed-grid/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & FixedGridAttributes>}
 */
export const Fixed: m.Component<import("../attributes.mjs").MbStandardAttributes & FixedGridAttributes>;
export type FixedGridColumn = "has-1-cols" | "has-1-cols-mobile" | "has-1-cols-tablet" | "has-1-cols-desktop" | "has-1-cols-widescreen" | "has-1-cols-fullhd" | "has-2-cols" | "has-2-cols-mobile" | "has-2-cols-tablet" | "has-2-cols-desktop" | "has-2-cols-widescreen" | "has-2-cols-fullhd" | "has-3-cols" | "has-3-cols-mobile" | "has-3-cols-tablet" | "has-3-cols-desktop" | "has-3-cols-widescreen" | "has-3-cols-fullhd" | "has-4-cols" | "has-4-cols-mobile" | "has-4-cols-tablet" | "has-4-cols-desktop" | "has-4-cols-widescreen" | "has-4-cols-fullhd" | "has-5-cols" | "has-5-cols-mobile" | "has-5-cols-tablet" | "has-5-cols-desktop" | "has-5-cols-widescreen" | "has-5-cols-fullhd" | "has-6-cols" | "has-6-cols-mobile" | "has-6-cols-tablet" | "has-6-cols-desktop" | "has-6-cols-widescreen" | "has-6-cols-fullhd" | "has-7-cols" | "has-7-cols-mobile" | "has-7-cols-tablet" | "has-7-cols-desktop" | "has-7-cols-widescreen" | "has-7-cols-fullhd" | "has-8-cols" | "has-8-cols-mobile" | "has-8-cols-tablet" | "has-8-cols-desktop" | "has-8-cols-widescreen" | "has-8-cols-fullhd" | "has-9-cols" | "has-9-cols-mobile" | "has-9-cols-tablet" | "has-9-cols-desktop" | "has-9-cols-widescreen" | "has-9-cols-fullhd" | "has-10-cols" | "has-10-cols-mobile" | "has-10-cols-tablet" | "has-10-cols-desktop" | "has-10-cols-widescreen" | "has-10-cols-fullhd" | "has-11-cols" | "has-11-cols-mobile" | "has-11-cols-tablet" | "has-11-cols-desktop" | "has-11-cols-widescreen" | "has-11-cols-fullhd" | "has-12-cols" | "has-12-cols-mobile" | "has-12-cols-tablet" | "has-12-cols-desktop" | "has-12-cols-widescreen" | "has-12-cols-fullhd";
export type FixedGridAttributes = {
    columnSize?: FixedGridColumn | FixedGridColumn[];
    /**
     * mobile: 2 cols, tablet: 4 cols, desktop: 8 cols, widescreen: 12 cols, fullhd: 16 cols
     */
    autoBreakpoint?: boolean;
};
