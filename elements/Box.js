import m from 'mithril';
import * as c from '../common/index.js';
import * as t from '../types.js';
import * as cl from '../classes/index.js';

/**
 * @typedef {object} BoxOptionsExtras
 * @prop {boolean} radius
 */

/**
 * @typedef {t.CommonOptions & t.ColorOptions & BoxOptionsExtras} BoxOptions
 */

/**
 * The box element is a simple container with a white background, some padding, and a box shadow.
 *
 * Ref: https://bulma.io/documentation/elements/box/
 */
export const Box = {
  /**
   *
   * @param {m.Vnode<BoxOptions>} vnode
   */
  oninit(vnode) {
    const commonClass = c.prepareCommonOptions(vnode.attrs);
    const colorClass = c.prepareColorOptions(vnode.attrs);
    const radiusCheck = cl.MbHasRadius.parse(vnode.attrs.radius);
    vnode.state.attrs = {
      classCompiled: c.prepareClasses(['box', ...commonClass, ...colorClass, radiusCheck])
    };
  },
  /**
   * @param {m.Vnode<BoxOptions>} vnode
   * @returns
   */
  view(vnode) {
    return m('div', { class: vnode.state.attrs.classCompiled }, vnode.children);
  }
};
