import m from 'mithril';
import z from 'zod';
import * as schema from '../schema/index.js';
import * as util from '../util/index.js';
import * as type from '../types.js';

/**
 * @typedef {object} BreadcrumbEntryOptions
 * @prop {string[]} [class] extra classes that you want applied to the notification
 * @prop {boolean} [hardLink] use a raw a tag instead of a SPA mithril link
 * @prop {boolean} [active]
 * @prop {string} href
 */

const breadcrumbEntrySchema = z.object({
  class: schema.classSchema,
  hardLink: z.boolean().default(false),
  href: z.string(),
  active: z
    .boolean()
    .default(false)
    .transform((a) => (a ? 'is-active' : ''))
});

/**
 * A simple breadcrumb component to improve your navigation experience
 *
 * Ref: https://bulma.io/documentation/components/breadcrumb/#
 */
export class BreadcrumbEntry {
  /**
   *
   * @param {m.Vnode<BreadcrumbEntryOptions>} vnode
   */
  constructor(vnode) {
    const att = breadcrumbEntrySchema.parse(vnode.attrs);
    this.class = util.joinClass(['mb-child-pointer-events-none', att.class]);
    this.hardLink = att.hardLink;
    this.href = att.href;
    this.active = att.active;
  }
  view({ children }) {
    return m(
      'li.mb-bulma-breadcrumb',
      { class: this.active },
      m(
        this.hardLink ? 'a' : m.route.Link,
        {
          href: this.href,
          class: this.class,
          onclick: (ev) => {
            Array.from(document.getElementsByClassName('mb-bulma-breadcrumb is-active')).forEach(
              (e) => {
                if (e.classList.contains('is-active')) e.classList.remove('is-active');
              }
            );
            ev.target.parentElement.classList.add('is-active');
          }
        },
        children ? children.map((c) => (typeof c === 'string' ? m('span', c) : c)) : null
      )
    );
  }
}
