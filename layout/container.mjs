import m from 'mithril';
import { extractClasses, toClass, is } from '../util.mjs';

/**
 * @typedef {object} ContainerAttributes
 * @prop {'widescreen'|'fullhd'|'max-desktop'|'max-widescreen'|'max-tablet'|'fluid'} [breakpoint]
 */

/**
 * A simple container to center your content horizontally
 *
 * https://bulma.io/documentation/layout/container/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & ContainerAttributes>}
 */
export const Container = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const { breakpoint, ...rest } = attrs;
    const classes = toClass(is({ breakpoint }), extracted);
    return m('.container', { class: classes, ...rest }, children);
  }
};
