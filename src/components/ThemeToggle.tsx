'use client';

import { MoonIcon } from './Icons';

export const THEME_KEY = 'theme';

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const nextLight = root.getAttribute('data-theme') !== 'light';
    if (nextLight) root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
    try {
      localStorage.setItem(THEME_KEY, nextLight ? 'light' : 'dark');
    } catch {
      // storage can be blocked; the toggle still works for this visit
    }
  }

  return (
    <button className="theme" type="button" onClick={toggle} aria-label="Switch between dark and light theme">
      <MoonIcon />
    </button>
  );
}
