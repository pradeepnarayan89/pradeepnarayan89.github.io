import { profile } from '@/data/profile';
import { DrupalIcon, GitHubIcon, LinkedInIcon } from './Icons';
import { SideNav } from './SideNav';
import { ThemeToggle } from './ThemeToggle';

export function Sidebar() {
  return (
    <header className="side">
      <div className="intro" id="top">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer */}
        <img className="photo" src="/photo.jpg" width={132} height={132} alt={`Portrait of ${profile.name}`} />
        <h1>
          {profile.first} <span className="grad">{profile.last}</span>
        </h1>
        <p className="role">{profile.role}</p>
        <p className="pitch">{profile.pitch}</p>
        <SideNav />
      </div>

      <ul className="social side-social" aria-label="Profiles">
        <li>
          <a href={profile.links.github} rel="noopener" aria-label="GitHub">
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a href={profile.links.linkedin} rel="noopener" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a href={profile.links.drupal} rel="noopener" aria-label="Drupal.org profile">
            <DrupalIcon />
          </a>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </header>
  );
}
