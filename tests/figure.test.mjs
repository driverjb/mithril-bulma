import { describe, it, expect, afterEach, vi } from 'vitest';
import { mountComponent, unmountComponent } from './helpers.mjs';
import { Figure } from '../elements_new/figure.mjs';

let root;

afterEach(() => {
  if (root) unmountComponent(root);
});

describe('Button Component', () => {
  it('renders a <figure> element with the appropriate size options class', () => {
    root = mountComponent(Figure, { size: 64 });
    const figure = root.querySelector('figure');
    expect(figure).toBeTruthy();
    expect(figure.textContent).toBe('');
    expect(figure.classList.contains('image')).toBe(true);
    expect(figure.classList.contains('is-64x64')).toBe(true);
  });
  it('renders a <figure> element with the appropriate ratio options class', () => {
    root = mountComponent(Figure, { ratio: '16x9' });
    const figure = root.querySelector('figure');
    expect(figure).toBeTruthy();
    expect(figure.textContent).toBe('');
    expect(figure.classList.contains('image')).toBe(true);
    expect(figure.classList.contains('is-16by9')).toBe(true);
  });
});
