import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import m from 'mithril';
import { NotificationManager } from '../elements_new/notification.mjs';
import { mountComponent, unmountComponent } from './helpers.mjs';

// Mock Delete component (used internally)
vi.mock('../elements_new/delete.mjs', () => ({
  Delete: {
    view: ({ attrs }) => m('button.delete', { onclick: attrs.onclick })
  }
}));

let root;

// Clean DOM and timers between tests
beforeEach(() => {
  vi.useFakeTimers();
  root = mountComponent(NotificationManager, {});
  NotificationManager.clear();
});

afterEach(() => {
  vi.clearAllTimers();
  if (root) unmountComponent(root);
  vi.restoreAllMocks();
});

describe('NotificationManager', () => {
  it('renders nothing initially', () => {
    expect(root.querySelectorAll('.notification').length).toBe(0);
  });

  it('adds a notification and renders it', () => {
    NotificationManager.add({ text: 'Hello!', color: 'primary' });
    // force redraw manually since Mithril’s redraw is mocked in tests
    m.redraw.sync();

    const notifications = root.querySelectorAll('.notification');
    expect(notifications.length).toBe(1);

    const notification = notifications[0];
    expect(notification.textContent).toContain('Hello!');
    expect(notification.classList.contains('is-primary')).toBe(true);
  });

  it('sets up an interval watcher when first notification is added', () => {
    const setIntervalSpy = vi.spyOn(global, 'setInterval');
    NotificationManager.add({ text: 'Watch me', expiresInMs: 1000 });
    expect(setIntervalSpy).toHaveBeenCalled();
  });

  it('removes expired notifications automatically', async () => {
    NotificationManager.setCheckFrequency(100);
    NotificationManager.add({ text: 'Soon gone', expiresInMs: 200 });

    m.redraw.sync();
    expect(root.querySelectorAll('.notification').length).toBe(1);

    // advance time by 300ms, enough for expiration
    vi.advanceTimersByTime(300);
    await Promise.resolve(); // allow Mithril redraw queue
    m.redraw.sync();

    expect(root.querySelectorAll('.notification').length).toBe(0);
  });

  it('ignores negative expiration times by inverting them and working normally', async () => {
    NotificationManager.setCheckFrequency(100);
    NotificationManager.add({ text: 'Soon gone', expiresInMs: -200 });

    m.redraw.sync();
    expect(root.querySelectorAll('.notification').length).toBe(1);

    // advance time by 300ms, enough for expiration
    vi.advanceTimersByTime(300);
    await Promise.resolve(); // allow Mithril redraw queue
    m.redraw.sync();

    expect(root.querySelectorAll('.notification').length).toBe(0);
  });

  it('keeps notifications without expiresInMs indefinitely', () => {
    NotificationManager.add({ text: 'Persistent', color: 'warning' });
    m.redraw.sync();

    vi.advanceTimersByTime(5000);
    expect(root.querySelectorAll('.notification').length).toBe(1);
  });

  it('adds close button when expiresInMs=0', () => {
    NotificationManager.add({ text: 'Closable', expiresInMs: 0 });
    m.redraw.sync();

    const closeBtn = root.querySelector('button.delete');
    expect(closeBtn).toBeTruthy();
  });

  it('clicking the close button removes notification', () => {
    NotificationManager.add({ text: 'Closable', expiresInMs: 0 });
    m.redraw.sync();

    const closeBtn = root.querySelector('button.delete');
    expect(closeBtn).toBeTruthy();

    closeBtn.click();
    m.redraw.sync();
    expect(root.querySelectorAll('.notification').length).toBe(0);
  });

  it('renders multiple notifications with correct colors', () => {
    NotificationManager.add({ text: 'First', color: 'success' });
    NotificationManager.add({ text: 'Second', color: 'danger' });
    m.redraw.sync();

    const notifications = root.querySelectorAll('.notification');
    expect(notifications.length).toBe(2);
    expect(notifications[0].classList.contains('is-success')).toBe(true);
    expect(notifications[1].classList.contains('is-danger')).toBe(true);
  });

  it('setCheckFrequency updates internal timer frequency', async () => {
    NotificationManager.setCheckFrequency(250);
    NotificationManager.add({ text: 'Fast tick', expiresInMs: 500 });

    vi.advanceTimersByTime(1000);
    await Promise.resolve(); // allow Mithril redraw queue
    m.redraw.sync();
    expect(root.querySelectorAll('.notification').length).toBe(0);
  });

  it('setCheckFrequency updates internal timer frequency while observation is running', async () => {
    NotificationManager.add({ text: 'Fast tick', expiresInMs: 500 });
    NotificationManager.setCheckFrequency(200);
    vi.advanceTimersByTime(800);
    await Promise.resolve(); // allow Mithril redraw queue
    m.redraw.sync();
    expect(root.querySelectorAll('.notification').length).toBe(0);
  });

  it('clears watcher when all notifications removed', async () => {
    const clearIntervalSpy = vi.spyOn(global, 'clearInterval');
    NotificationManager.setCheckFrequency(50);
    NotificationManager.add({ text: 'One-time', expiresInMs: 50 });
    m.redraw.sync();

    vi.advanceTimersByTime(100);
    await Promise.resolve();
    m.redraw.sync();

    expect(clearIntervalSpy).toHaveBeenCalled();
  });
});
