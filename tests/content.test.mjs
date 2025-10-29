import { describe, it, expect, afterEach, vi } from 'vitest';
import { mountComponent, unmountComponent } from './helpers.mjs';
import { Content } from '../elements_new/content.mjs';

let root;

afterEach(() => {
  if (root) unmountComponent(root);
});

describe('Content Component', () => {
  it('renders a <div> element with appropriate classes', () => {
    root = mountComponent(Content, { class: 'test-content', size: 'large' }, 'My Content');
    const content = root.querySelector('div');
    expect(content).toBeTruthy();
    expect(content.textContent).toBe('My Content');
    expect(content.classList.contains('content')).toBe(true);
    expect(content.classList.contains('test-content')).toBe(true);
    expect(content.classList.contains('is-large'));
  });
  it('renders a default element of normal size when no size is provided', () => {
    root = mountComponent(Content, null, 'My Content');
    const content = root.querySelector('div');
    expect(content).toBeTruthy();
    expect(content.textContent).toBe('My Content');
    expect(content.classList.contains('content')).toBe(true);
    expect(content.classList.length).toBe(1);
  });
});
