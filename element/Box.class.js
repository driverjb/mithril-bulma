import m from 'mithril';
import { classSchema } from '../schema/index.js';

/**
 * @typedef {object} BoxOptions
 * @prop {string[]} [class]
 */

/**
 * The box element is a simple container with a white background, some padding, and a box shadow.
 *
 * Ref: https://bulma.io/documentation/elements/box/
 */
export class Box {
  /**
   *
   * @param {import('mithril').Vnode<BoxOptions>} vnode
   */
  constructor(vnode) {
    this.class = classSchema.parse(vnode.attrs.class);
    delete vnode.attrs.class;
  }
  view({ attrs, children }) {
    return m('.box', { class: this.class, ...attrs }, children);
  }
}
