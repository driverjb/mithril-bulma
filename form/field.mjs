import m from 'mithril';
import { is } from '../util.mjs';

/**
 * @typedef {object} FieldAttributes
 * @prop {boolean} [grouped]
 * @prop {boolean} [multiline]
 * @prop {boolean} [addons]
 * @prop {import('../attributes.mjs').Alignment} [alignment]
 * @prop {boolean} [horizontal]
 * @prop {import('../attributes.mjs').Size} [size]
 */

/**
 * A wrapper that allows you to include many details around an input element. For example:
 *   - Form.Field
 *     - Form.Control
 *       - Form.Input
 *       - Form.Icon
 *     - Form.Help
 *
 * https://bulma.io/documentation/form/general/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & FieldAttributes>}
 */
export const Field = {
  view: ({ attrs, children }) => {
    const {
      addons,
      alignment,
      class: userClass,
      grouped,
      horizontal,
      multiline,
      size,
      ...rest
    } = attrs;
    const fieldClasses = is({ grouped, alignment }).filter(Boolean).join(' ');
    return m('.field', { class: fieldClasses, ...rest }, children);
  }
};
