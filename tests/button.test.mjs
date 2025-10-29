import { describe, it, expect, afterEach, vi } from 'vitest';
import { mountComponent, unmountComponent } from './helpers.mjs';
import { Button } from '../elements_new/button.mjs';

let root;

afterEach(() => {
  if (root) unmountComponent(root);
});

describe('Button Component', () => {
  it('renders a <button> element by default', () => {
    root = mountComponent(Button, { class: 'test-btn' }, 'Click me');

    const btn = root.querySelector('button');
    expect(btn).toBeTruthy();
    expect(btn.textContent).toBe('Click me');
    expect(btn.classList.contains('button')).toBe(true);
    expect(btn.classList.contains('test-btn')).toBe(true);
  });

  it('renders a <button> element when "button" is the type', () => {
    root = mountComponent(Button, { class: 'test-btn', type: 'button' }, 'Click me');

    const btn = root.querySelector('button');
    expect(btn).toBeTruthy();
    expect(btn.textContent).toBe('Click me');
    expect(btn.classList.contains('button')).toBe(true);
    expect(btn.classList.contains('test-btn')).toBe(true);
  });

  it('renders as an <a> element when type="anchor"', () => {
    root = mountComponent(Button, { type: 'anchor' }, 'Link');

    const anchor = root.querySelector('a.button');
    expect(anchor).toBeTruthy();
    expect(anchor.textContent).toBe('Link');
  });

  it('renders as an <input> for type="submit"', () => {
    root = mountComponent(Button, { type: 'submit', value: 'Save' });

    const input = root.querySelector('input.button');
    expect(input).toBeTruthy();
    expect(input.type).toBe('submit');
    expect(input.value).toBe('Save');
  });

  it('renders as an <input> for type="reset"', () => {
    root = mountComponent(Button, { type: 'reset', value: 'Reset' });

    const input = root.querySelector('input.button');
    expect(input).toBeTruthy();
    expect(input.type).toBe('reset');
    expect(input.value).toBe('Reset');
  });

  it('applies Bulma modifier classes', () => {
    root = mountComponent(
      Button,
      {
        color: 'primary',
        size: 'large',
        rounded: true,
        loading: true,
        tint: true,
        responsive: true,
        fullWidth: true,
        outlined: true,
        inverted: true,
        static: true
      },
      'Go'
    );

    const btn = root.querySelector('button');
    expect(btn.className).toContain('is-primary');
    expect(btn.className).toContain('is-large');
    expect(btn.className).toContain('is-rounded');
    expect(btn.className).toContain('is-loading');
    expect(btn.className).toContain('is-responsive');
    expect(btn.className).toContain('is-fullwidth');
    expect(btn.className).toContain('is-outlined');
    expect(btn.className).toContain('is-inverted');
    expect(btn.className).toContain('is-static');
  });

  it('handles onclick events', async () => {
    const onClick = vi.fn();
    root = mountComponent(Button, { onclick: onClick }, 'Press');

    const btn = root.querySelector('button');
    btn.click();
    await new Promise(requestAnimationFrame);

    expect(onClick).toHaveBeenCalledOnce();
  });
});
