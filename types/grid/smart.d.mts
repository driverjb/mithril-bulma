/**
 * @typedef {object} GridAttributes
 * @prop {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'26'|'27'|'28'|'29'|'30'|'31'|'32'} [minColumnSize]
 * @prop {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'} [gap]
 * @prop {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'} [rowGap]
 * @prop {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'} [colGap]
 */
/**
 * A smart 2D grid with flexible columns
 *
 * https://bulma.io/documentation/grid/smart-grid/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & GridAttributes>}
 */
export const Smart: m.Component<import("../attributes.mjs").MbStandardAttributes & GridAttributes>;
export type GridAttributes = {
    minColumnSize?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32";
    gap?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
    rowGap?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
    colGap?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
};
import m from 'mithril';
