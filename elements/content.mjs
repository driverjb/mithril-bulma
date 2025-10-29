import m from 'mithril';
import { extractClasses, toClass, is } from '../util.mjs';

/**
 * @typedef {object} ContentAttributes
 * @prop {import('../attributes.mjs').Size} [size]
 */

/**
 * A single class to handle WYSIWYG generated content, where only HTML tags are available
 *
 * When you can't use the CSS classes you want, or when you just want to directly use HTML tags, use
 * content as container. It can handle almost any HTML tag:
 *
 * - < p> paragraphs
 * - < ul> < ol> < dl> lists
 * - < h1> to < h6> headings
 * - < blockquote> quotes
 * - < em> and < strong>
 * - < table> < tr> < th> < td> tables
 *
 * This content class can be used in any context where you just want to (or can only) write some
 * text. For example, it's used for the paragraph you're currently reading.
 *
 * https://bulma.io/documentation/elements/content/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & ContentAttributes>}
 */
export const Content = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const { size, ...rest } = attrs;
    const classes = toClass(is({ size }, extracted));
    return m('.content', { class: classes, ...rest }, children);
  }
};
