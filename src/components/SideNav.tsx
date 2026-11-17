'use client';

import { useEffect, useState } from 'react';
import { navItems } from '@/data/profile';

export function SideNav() {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav" aria-label="Primary">
      <ul>
        {navItems.map((item) => {
          const id = item.href.slice(1);
          const isActive = active === id;
          const classes = [
            'cta' in item && item.cta ? 'nav-cta' : '',
            isActive ? 'active' : '',
          ]
            .filter(Boolean)
            .join(' ');
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={classes || undefined}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
