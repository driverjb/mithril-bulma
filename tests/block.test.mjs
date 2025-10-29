import { describe, it, expect, afterEach, vi } from 'vitest';
import { mountComponent, unmountComponent } from './helpers.mjs';
import { Block } from '../elements_new/block.mjs';

let root;

afterEach(() => {
  if (root) unmountComponent(root);
});

describe('Block Component', () => {
  it('renders a <div> element with appropriate classes', () => {
    root = mountComponent(Block, { class: 'test-block' }, 'Test');
    const block = root.querySelector('div');
    expect(block).toBeTruthy();
    expect(block.textContent).toBe('Test');
    expect(block.classList.contains('block')).toBe(true);
    expect(block.classList.contains('test-block')).toBe(true);
  });
});
