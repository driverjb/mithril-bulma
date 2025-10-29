import { describe, it, expect, afterEach, vi } from 'vitest';
import { mountComponent, unmountComponent } from './helpers.mjs';
import { Delete } from '../elements_new/delete.mjs';

let root;

afterEach(() => {
  if (root) unmountComponent(root);
});

describe('Button Component', () => {
  it('renders a <button> element with the delete class', () => {
    root = mountComponent(Delete, null);
    const btn = root.querySelector('button');
    expect(btn).toBeTruthy();
    expect(btn.textContent).toBe('');
    expect(btn.classList.contains('delete')).toBe(true);
    expect(btn.classList.length).toBe(1);
  });

  it('respects the size property with appropriate bulma classes', () => {
    root = mountComponent(Delete, { size: 'large' });
    const btn = root.querySelector('button');
    expect(btn).toBeTruthy();
    expect(btn.textContent).toBe('');
    expect(btn.classList.contains('delete')).toBe(true);
    expect(btn.classList.contains('is-large')).toBe(true);
    expect(btn.classList.length).toBe(2);
  });

  it('handles onclick events', async () => {
    const onClick = vi.fn();
    root = mountComponent(Delete, { onclick: onClick }, 'Press');

    const btn = root.querySelector('button');
    btn.click();
    await new Promise(requestAnimationFrame);

    expect(onClick).toHaveBeenCalledOnce();
  });
});
