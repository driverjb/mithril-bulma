import { describe, it, expect, afterEach } from 'vitest';
import { mountComponent, unmountComponent } from './helpers.mjs';
import { Image } from '../elements_new/image.mjs';

let root;

afterEach(() => {
  if (root) unmountComponent(root);
});

describe('Image Component', () => {
  it('returns null when src is missing', () => {
    root = mountComponent(Image, {});
    expect(root.innerHTML).toBe('');
  });

  it('renders an <img> when src is provided', () => {
    root = mountComponent(Image, { src: 'photo.jpg' });

    const img = root.querySelector('img');
    expect(img).toBeTruthy();
    expect(img.getAttribute('src')).toBe('photo.jpg');
  });

  it('applies "is-rounded" class when rounded is true', () => {
    root = mountComponent(Image, { src: 'avatar.png', rounded: true });
    const img = root.querySelector('img');
    expect(img.classList.contains('is-rounded')).toBe(true);
  });

  it('merges user-supplied class with is-rounded', () => {
    root = mountComponent(Image, { src: 'avatar.png', rounded: true, class: 'custom-img' });
    const img = root.querySelector('img');
    expect(img.classList.contains('is-rounded')).toBe(true);
    expect(img.classList.contains('custom-img')).toBe(true);
  });

  it('passes through arbitrary attributes', () => {
    root = mountComponent(Image, {
      src: 'landscape.png',
      alt: 'Landscape photo',
      title: 'Beautiful view'
    });

    const img = root.querySelector('img');
    expect(img.getAttribute('alt')).toBe('Landscape photo');
    expect(img.getAttribute('title')).toBe('Beautiful view');
  });

  it('renders cleanly when only src is provided', () => {
    root = mountComponent(Image, { src: 'onlysrc.png' });
    const img = root.querySelector('img');
    expect(img.className).toBe('');
  });
});
