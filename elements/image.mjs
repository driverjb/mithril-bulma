import m from 'mithril';
import { extractClasses, is, toClass } from '../util.mjs';

/**
 * @typedef {object} ImageAttributes
 * @prop {boolean} [rounded]
 * @prop {string} [src]
 * @prop {string} [alt]
 * @prop {16|24|32|48|64|96|128} [size]
 * @prop {"square"|"1x1"|"5x4"|"4x3"|"3x2"|"5x3"|"16x9"|"2x1"|"3x1"|"4x5"|"3x4"|"2x3"|"3x5"|"9x16"|"1x2"|"1x3"} [ratio]
 */

/**
 * A container for responsive images
 *
 * Because images can take a few seconds to load (or not at all), use the image container to specify
 * a precisely sized container so that your layout isn't broken because of image loading or image
 * errors.
 *
 * https://bulma.io/documentation/elements/image/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & ImageAttributes>}
 */
export const Image = {
  view: ({ attrs }) => {
    const extracted = extractClasses(attrs);
    const { rounded, src = null, alt = 'Image unavailable', size, ratio, ...rest } = attrs;
    const figureClasses = toClass(
      size ? `is-${size}x${size}` : null,
      ratio ? `is-${ratio.replace('x', 'by')}` : null,
      extracted
    );
    const imgClasses = toClass(is({ rounded }));
    return m(
      'figure.image',
      { class: figureClasses, ...rest },
      m('img', { class: imgClasses, src, alt })
    );
  }
};
