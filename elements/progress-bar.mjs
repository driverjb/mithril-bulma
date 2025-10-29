import m from 'mithril';
import { extractClasses, is, toClass } from '../util.mjs';

/**
 * @typedef {object} ProgressAttributes
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {number} [max]
 * @prop {number} [value]
 * @prop {boolean} [fullWidth]
 */

/**
 * Native HTML progress bars
 *
 * The Bulma progress bar is a simple CSS class that styles the native <progress> HTML element.
 *
 * https://bulma.io/documentation/elements/progress/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & ProgressAttributes>}
 */
export const Progress = {
  view: ({ attrs }) => {
    const extracted = extractClasses(attrs);
    const { color, fullWidth, size, ...rest } = attrs;
    const classes = toClass(is({ color, size, fullWidth }), extracted);
    return m('progress.progress', { class: classes, ...rest });
  }
};
