import m from 'mithril';

/**
 * A simple wrapper for grouping forms
 *
 * https://bulma.io/documentation/form/general/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Form = {
  view: ({ attrs, children }) => m('form', attrs, children)
};
