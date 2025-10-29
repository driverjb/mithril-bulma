import { describe, it, expect, afterEach, vi } from 'vitest';
import { mountComponent, unmountComponent } from './helpers.mjs';
import { Box } from '../elements_new/box.mjs';

let root;

afterEach(() => {
  if (root) unmountComponent(root);
});

describe('Box Component', () => {
  it('renders a <div> element with appropriate classes', () => {
    root = mountComponent(Box, { class: 'test-box' }, 'Test');
    const box = root.querySelector('div');
    expect(box).toBeTruthy();
    expect(box.textContent).toBe('Test');
    expect(box.classList.contains('box')).toBe(true);
    expect(box.classList.contains('test-box')).toBe(true);
  });
});
