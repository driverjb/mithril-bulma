import m from 'mithril';
import { NBSP, is, has, toClass } from '../util.mjs';

/**
 * @typedef {object} HelpAttributes
 * @prop {import('../attributes.mjs').Color} [colorGuide] Color of text before input is provided
 * @prop {import('../attributes.mjs').Color} [colorValid] Color of text when the input is valid
 * @prop {import('../attributes.mjs').Color} [colorInvalid] Color of text when the input is invalid
 * @prop {string} [textGuide] Text to display when no input is present
 * @prop {string} [textValid] Text to display when input is valid
 * @prop {string} [textInvalid] Text to display when input is invalid
 * @prop {boolean|null} [valid] Controls the display state of the help text
 */

/**
 * A context aware help text with many settings for helping the user see what's required of an input.
 *
 * https://bulma.io/documentation/form/general/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & HelpAttributes>}
 */
export const Help = {
  view: ({ attrs }) => {
    const {
      class: userClass = null,
      colorGuide = 'info',
      colorInvalid = 'danger',
      colorValid = 'success',
      textGuide = null,
      textInvalid = null,
      textValid = null,
      valid = null,
      ...rest
    } = attrs;
    const guideClasses = toClass([userClass].concat(is({ colorGuide })));
    const invalidClasses = toClass([userClass].concat(is({ colorInvalid })));
    const validClasses = toClass([userClass].concat(is({ colorValid })));
    const hasAtLeastOne = Boolean(textGuide) || Boolean(textInvalid) || Boolean(textValid);
    if (!hasAtLeastOne) return null;
    else if (valid === true)
      return m('p.help', { class: validClasses, ...rest }, textValid ?? NBSP);
    else if (valid === false)
      return m('p.help', { class: invalidClasses, ...rest }, textInvalid ?? NBSP);
    else return m('p.help', { class: guideClasses, ...rest }, textGuide ?? NBSP);
  }
};
