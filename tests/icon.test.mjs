import { describe, it, expect, afterEach } from 'vitest';
import { Icon } from '../elements_new/icon.mjs';
import { mountComponent, unmountComponent } from './helpers.mjs';

let root;

afterEach(() => {
  if (root) unmountComponent(root);
});

describe('Icon Component', () => {
  it('returns null when faIcon is missing', () => {
    // Mounting with no faIcon should result in no DOM content
    root = mountComponent(Icon, {});
    expect(root.innerHTML).toBe('');
  });

  it('renders a basic regular icon (default style)', () => {
    root = mountComponent(Icon, { faIcon: 'user' });

    const span = root.querySelector('span.icon');
    expect(span).toBeTruthy();

    const i = span.querySelector('i');
    expect(i.className).toContain('fa-user');
    expect(i.className).toContain('fa'); // default fallback
    expect(i.className).not.toContain('fab');
  });

  it('applies faStyle variants correctly', () => {
    const styles = {
      regular: 'far',
      solid: 'fas',
      brands: 'fab'
    };

    for (const [style, expected] of Object.entries(styles)) {
      root = mountComponent(Icon, { faIcon: 'user', faStyle: style });
      const i = root.querySelector('i');
      expect(i.classList.contains(expected)).toBe(true);
      unmountComponent(root);
    }
  });

  it('applies icon sizing correctly', () => {
    const sizes = {
      small: null,
      medium: 'fa-lg',
      large: 'fa-2x'
    };

    for (const [size, expectedClass] of Object.entries(sizes)) {
      root = mountComponent(Icon, { faIcon: 'user', faIconSize: size });
      const i = root.querySelector('i');
      if (expectedClass) expect(i.classList.contains(expectedClass)).toBe(true);
      else expect(i.className).not.toContain('fa-lg');
      unmountComponent(root);
    }
  });

  it('applies frame, animation, border, and color classes', () => {
    root = mountComponent(Icon, {
      faIcon: 'spinner',
      faIconFrameSize: 'medium',
      faAnimated: 'pulse',
      faBorder: true,
      color: 'primary'
    });

    const span = root.querySelector('span.icon');
    expect(span.className).toContain('is-medium');

    const i = span.querySelector('i');
    expect(i.className).toContain('fa-pulse');
    expect(i.className).toContain('fa-border');
    expect(i.className).toContain('has-text-primary');
  });

  it('renders with text (default left icon)', () => {
    root = mountComponent(Icon, { faIcon: 'user', text: 'Profile' });

    const container = root.querySelector('.icon-text');
    expect(container).toBeTruthy();

    const spans = container.querySelectorAll('span');
    expect(spans.length).toBe(2); // icon + text
    expect(spans[1].textContent).toBe('Profile');
  });

  it('renders text on the right when iconSide="right"', () => {
    root = mountComponent(Icon, { faIcon: 'user', text: 'Profile', iconSide: 'right' });

    const container = root.querySelector('.icon-text');
    const spans = container.querySelectorAll('span');
    expect(spans[0].textContent).toBe('Profile');
    expect(spans[1].querySelector('i.fa-user')).toBeTruthy();
  });

  it('renders inline variant with a <span> wrapper', () => {
    root = mountComponent(Icon, { faIcon: 'user', text: 'Inline', inline: true });

    const wrapper = root.querySelector('span.icon-text');
    expect(wrapper).toBeTruthy();
    expect(wrapper.textContent).toContain('Inline');
  });

  it('applies textColor class correctly', () => {
    root = mountComponent(Icon, {
      faIcon: 'user',
      text: 'Colored text',
      textColor: 'danger'
    });

    const textSpan = root.querySelector('.icon-text span.has-text-danger');
    expect(textSpan).toBeTruthy();
    expect(textSpan.textContent).toBe('Colored text');
  });

  it('merges custom user class with frame size', () => {
    root = mountComponent(Icon, {
      faIcon: 'user',
      faIconFrameSize: 'large',
      class: 'custom-frame'
    });

    const span = root.querySelector('span.icon');
    expect(span.className).toContain('is-large');
    expect(span.className).toContain('custom-frame');
  });
});
