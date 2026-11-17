import { describe, expect, it } from 'vitest';
import { navItems, profile, site } from '@/data/profile';

function allStrings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(allStrings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(allStrings);
  return [];
}

describe('profile data', () => {
  it('has the required identity fields', () => {
    expect(profile.name).toBe(`${profile.first} ${profile.last}`);
    expect(profile.role).not.toHaveLength(0);
    expect(site.title).toContain(profile.name);
  });

  it('keeps the site description short enough for search results', () => {
    expect(site.description.length).toBeLessThanOrEqual(200);
  });

  it('uses https for every public link', () => {
    for (const url of [site.url, ...Object.values(profile.links)]) {
      expect(url).toMatch(/^https:\/\//);
    }
  });

  it('lists experience newest first with dates', () => {
    expect(profile.experience.length).toBeGreaterThan(0);
    expect(profile.experience[0].when).toMatch(/Present$/);
    for (const job of profile.experience) {
      expect(job.when).toMatch(/\d{4}/);
      expect(job.title).not.toHaveLength(0);
      expect(job.where).not.toHaveLength(0);
    }
  });

  it('counts six Acquia certifications, matching the stat tile', () => {
    const acquia = profile.certifications.filter((c) => c.startsWith('Acquia Certified'));
    const stat = profile.stats.find((s) => s.label.includes('Acquia'));
    expect(stat?.value).toBe(String(acquia.length));
  });

  it('does not publish an email address or phone number', () => {
    const text = allStrings(profile).join('\n');
    expect(text).not.toMatch(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/);
    expect(text).not.toMatch(/\+?\d[\d\s().-]{8,}\d/);
  });

  it('points every nav item at an in-page anchor', () => {
    expect(navItems.length).toBeGreaterThan(0);
    for (const item of navItems) expect(item.href).toMatch(/^#[a-z-]+$/);
  });
});
