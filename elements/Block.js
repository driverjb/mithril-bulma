import m from 'mithril';
import * as c from '../common/index.js';
import * as t from '../types.js';

/**
 * @typedef {t.CommonOptions & t.ColorOptions} BlockOptions
 */

/**
 * The block element is a simple spacer tool. It allows sibling HTML elements to have a consistent margin between them.
 *
 * Ref: https://bulma.io/documentation/elements/block/
 */
export const Block = {
  /**
   *
   * @param {m.Vnode<BlockOptions>} vnode
   */
  oninit(vnode) {
    const commonClass = c.prepareCommonOptions(vnode.attrs);
    const colorClass = c.prepareColorOptions(vnode.attrs);
    vnode.state.attrs = {
      classCompiled: c.prepareClasses(['block', ...commonClass, ...colorClass])
    };
  },
  /**
   * @param {m.Vnode<BlockOptions>} vnode
   * @returns
   */
  view(vnode) {
    return m('div', { class: vnode.state.attrs.classCompiled }, vnode.children);
  }
};
