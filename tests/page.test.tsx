import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import Home from '@/app/page';
import { ThemeToggle } from '@/components/ThemeToggle';
import { navItems, profile } from '@/data/profile';

beforeEach(() => {
  // jsdom has no IntersectionObserver; the nav falls back to no highlighting
  Reflect.deleteProperty(window, 'IntersectionObserver');
  document.documentElement.removeAttribute('data-theme');
  localStorage.clear();
});

afterEach(cleanup);

describe('home page', () => {
  it('renders one h1 with the full name', () => {
    render(<Home />);
    const headings = screen.getAllByRole('heading', { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0].textContent).toBe(profile.name);
  });

  it('has a section for every nav link', () => {
    const { container } = render(<Home />);
    for (const item of navItems) {
      expect(container.querySelector(item.href), `missing ${item.href}`).not.toBeNull();
    }
  });

  it('renders every job and certification', () => {
    render(<Home />);
    for (const job of profile.experience) {
      expect(screen.getAllByText(job.where).length).toBeGreaterThan(0);
    }
    for (const cert of profile.certifications) {
      expect(screen.getByText(cert)).toBeTruthy();
    }
  });

  it('gives the portrait alt text and opens external links safely', () => {
    const { container } = render(<Home />);
    expect(screen.getByAltText(`Portrait of ${profile.name}`)).toBeTruthy();
    const external = container.querySelectorAll('a[href^="http"]');
    expect(external.length).toBeGreaterThan(0);
    external.forEach((a) => expect(a.getAttribute('rel')).toContain('noopener'));
  });

  it('opens every external link in a new tab and keeps in-page links in the same tab', () => {
    const { container } = render(<Home />);
    const external = container.querySelectorAll('a[href^="http"]');
    expect(external.length).toBeGreaterThan(0);
    external.forEach((a) => {
      expect(a.getAttribute('target'), a.getAttribute('href') ?? '').toBe('_blank');
      expect(a.getAttribute('rel')).toContain('noreferrer');
    });
    container.querySelectorAll('a[href^="#"]').forEach((a) => {
      expect(a.hasAttribute('target'), a.getAttribute('href') ?? '').toBe(false);
    });
  });

  it('exposes a primary navigation landmark', () => {
    render(<Home />);
    const nav = screen.getByRole('navigation', { name: 'Primary' });
    expect(within(nav).getAllByRole('link')).toHaveLength(navItems.length);
  });
});

describe('theme toggle', () => {
  it('switches to light, persists it, and switches back', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /theme/i });

    fireEvent.click(button);
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');

    fireEvent.click(button);
    expect(document.documentElement.hasAttribute('data-theme')).toBe(false);
    expect(localStorage.getItem('theme')).toBe('dark');
  });
});
