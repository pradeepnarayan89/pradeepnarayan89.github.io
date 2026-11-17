import { profile } from '@/data/profile';

function TagList({ items, label }: { items: string[]; label?: string }) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function About() {
  return (
    <section id="about">
      <h2>About</h2>
      {profile.about.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <ul className="stats" aria-label="Highlights">
        {profile.stats.map((stat) => (
          <li key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Focus() {
  return (
    <section id="focus">
      <h2>What I do</h2>
      <ul className="cards">
        {profile.focus.map((card) => (
          <li key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </li>
        ))}
      </ul>

      <h3 className="sub">How I work</h3>
      <ol className="steps">
        {profile.steps.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {profile.experience.map((job) => (
        <article className="job" key={`${job.when}-${job.where}`}>
          <p className="when">{job.when}</p>
          <div>
            <h3>{job.title}</h3>
            <p className="where">{job.where}</p>
            {job.points && (
              <ul className="points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
            {job.tags && <TagList items={job.tags} label="Technologies" />}
          </div>
        </article>
      ))}

      <h3 className="sub">Education</h3>
      <ul className="plain">
        {profile.education.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      {profile.skills.map((group) => (
        <div className="skillrow" key={group.title}>
          <h3>{group.title}</h3>
          <TagList items={group.items} />
        </div>
      ))}

      <h3 className="sub">Certifications</h3>
      <ul className="plain">
        {profile.certifications.map((cert) => (
          <li key={cert}>{cert}</li>
        ))}
      </ul>
      <p>
        <a href={profile.links.acquia} rel="noopener">
          View my Acquia certification record
        </a>
      </p>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Based in the New York City area, United States. The best way to reach me is through one of these.</p>
      <ul className="links">
        <li>
          <a className="btn primary" href={profile.links.linkedin} rel="noopener">
            LinkedIn
          </a>
        </li>
        <li>
          <a className="btn" href={profile.links.github} rel="noopener">
            GitHub
          </a>
        </li>
        <li>
          <a className="btn" href={profile.links.drupal} rel="noopener">
            Drupal.org
          </a>
        </li>
        <li>
          <a className="btn" href={profile.links.acquia} rel="noopener">
            Acquia certifications
          </a>
        </li>
      </ul>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
