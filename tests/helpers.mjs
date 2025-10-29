import m from 'mithril';

/**
 * Mount a Mithril component into a temporary DOM root for testing.
 * Automatically appends to document.body.
 *
 * @template {m.Component<any>} C
 * @param {C} component - Mithril component to mount
 * @param {object} [attrs] - Component attributes
 * @param {any} [children] - Optional children
 * @returns {HTMLElement} - The root element containing the mounted component
 */
export function mountComponent(component, attrs = {}, children = null) {
  const root = document.createElement('div');
  document.body.appendChild(root);

  // Wrap children in array if it isn't already
  let childNodes = null;
  if (children != null) {
    childNodes = Array.isArray(children) ? children : [children];
  }

  m.mount(root, {
    view: () => m(component, attrs, childNodes)
  });

  return root;
}

/**
 * Unmount and clean up a previously mounted Mithril component.
 * @param {HTMLElement} root
 */
export function unmountComponent(root) {
  m.mount(root, null);
  root.remove();
}
