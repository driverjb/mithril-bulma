import m from 'mithril';
import z from 'zod';
import * as t from '../types.js';
import * as c from '../common/index.js';

/**
 * @typedef {object} ContentOptionsExtras
 * @prop {"small"|"normal"|"medium"|"large"} size
 */

/**
 * @typedef {t.CommonOptions & t.ColorOptions & ContentOptionsExtras} ContentOptions
 */

/**
 * A single class to handle WYSIWYG generated content, where only HTML tags are available.
 *
 * Ref: https://bulma.io/documentation/elements/content/
 */
export const Content = {
  /**
   * @param {m.Vnode<ContentOptions>} vnode
   */
  oninit(vnode) {
    const commonClass = c.prepareCommonOptions(vnode.attrs);
    const colorClass = c.prepareColorOptions(vnode.attrs);
    const sizeClass = z
      .enum(['small', 'medium', 'normal', 'large'])
      .transform((a) => `is-${a}`)
      .optional();
    vnode.state.attrs = {
      classCompiled: c.prepareClasses(['content', ...commonClass, ...colorClass, sizeClass])
    };
  },
  /**
   * @param {m.Vnode<ContentOptions>} vnode
   */
  view(vnode) {
    const { children } = vnode;
    return m('div', { class: vnode.state.attrs.classCompiled }, children);
  }
};
