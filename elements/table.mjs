import m from 'mithril';
import { extractClasses, toClass, is } from '../util.mjs';

/**
 * @typedef {object} TableColor
 * @prop {import('../attributes.mjs').Color} [color]
 */

/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const ScrollableWrapper = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const classes = toClass(extracted);
    return m('.table-container', { class: classes, ...attrs }, children);
  }
};

/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & {bordered:boolean, striped: boolean, narrow: boolean, hoverable: boolean, fullwidth: boolean, scrollable: boolean}>}
 */
export const Main = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const {
      bordered = false,
      fullwidth = false,
      hoverable = false,
      narrow = false,
      scrollable = false,
      striped = false,
      ...rest
    } = attrs;
    const classes = toClass(is({ bordered, fullwidth, hoverable, narrow, striped }), extracted);
    return m('table.table', { class: classes, ...rest }, children);
  }
};

/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Body = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const classes = toClass(extracted);
    return m('tbody', { class: classes, ...attrs }, children);
  }
};

/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Head = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const classes = toClass(extracted);
    return m('thead', { class: classes, ...attrs }, children);
  }
};

/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Foot = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const classes = toClass(extracted);
    return m('tfoot', { class: classes, ...attrs }, children);
  }
};

/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & TableColor & {selected: boolean}>}
 */
export const Row = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const { color, ...rest } = attrs;
    const classes = toClass(is({ color }), extracted);
    return m('tr', { class: classes, ...rest }, children);
  }
};

/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & TableColor>}
 */
export const Cell = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const { color, ...rest } = attrs;
    const classes = toClass(is({ color }), extracted);
    return m('td', { class: classes, ...rest }, children);
  }
};

/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & TableColor>}
 */
export const HeaderCell = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const { color, ...rest } = attrs;
    const classes = toClass(is({ color }), extracted);
    return m('th', { class: classes, ...rest }, children);
  }
};
