export type Experience = {
  when: string;
  title: string;
  where: string;
  points?: string[];
  tags?: string[];
};

export type SkillGroup = { title: string; items: string[] };

export const site = {
  url: 'https://pradeepnarayan89.github.io',
  title: 'Pradeep Narayana | Senior Software Engineer, CMS (Drupal)',
  description:
    'Pradeep Narayana is a Senior Software Engineer at Northwestern Mutual with 14+ years building CMS (Drupal) web applications. Six Acquia certifications.',
};

export const profile = {
  name: 'Pradeep Narayana',
  first: 'Pradeep',
  last: 'Narayana',
  role: 'Senior Software Engineer · CMS (Drupal)',
  pitch:
    '14+ years building and delivering web applications, with deep Drupal and full-stack experience.',
  links: {
    github: 'https://github.com/pradeepnarayan89',
    linkedin: 'https://www.linkedin.com/in/pradeepnarayan89',
    drupal: 'https://www.drupal.org/u/pradeepnarayan89',
    acquia: 'https://certification.acquia.com/user/2649',
  },
  about: [
    "I'm a full-stack developer at Northwestern Mutual in the New York City area, with 14+ years of building web applications from the database to the browser. On the back end I work with Drupal and PHP. On the front end I build with React, Next.js, Vue and Nuxt, connected through REST and JSON APIs.",
    "I'm strongest at custom Drupal modules and themes, third-party integrations, and the delivery work around them: architecture, Docker and CI/CD, and release management. I'm passionate about open source and keep learning, and I hold six Acquia certifications.",
  ],
  stats: [
    { value: '14+', label: 'years since 2012' },
    { value: '100+', label: 'solutions for a global pharma client' },
    { value: '250+', label: 'sites moved to Cloudflare DNS' },
    { value: '6', label: 'Acquia certifications' },
  ],
  focus: [
    {
      title: 'CMS architecture',
      text: 'High-level and component-level architecture for Drupal web applications, as solutions architect and subject matter expert.',
    },
    {
      title: 'Custom modules and themes',
      text: 'Custom Drupal modules, themes and Twig templates, plus third-party API and application integrations.',
    },
    {
      title: 'Upgrades and migrations',
      text: 'Core updates with Composer, a PHP upgrade across a global pharmaceutical platform, and a full data migration for a rebuilt brand site.',
    },
    {
      title: 'CI/CD and DevOps',
      text: 'Automated builds and releases with Jenkins, GitLab and Ansible, Docker environments, and Cloudflare DNS onboarding for 250+ sites.',
    },
    {
      title: 'Security and access',
      text: 'Security fixes across the platform, a private file system for confidential content, and SSO login with Janrain.',
    },
    {
      title: 'Delivery and leadership',
      text: 'Team lead, technical architect and module lead. Project documents from BRD to change requests, plus mentoring and client handover.',
    },
  ],
  steps: [
    {
      title: 'Understand the requirements',
      text: 'Work with clients and distributed teams to evaluate business requirements.',
    },
    {
      title: 'Design the architecture',
      text: 'Prepare high-level and component-level architecture, and document it.',
    },
    {
      title: 'Build',
      text: 'Develop custom modules and themes, and integrate third-party APIs.',
    },
    {
      title: 'Automate and release',
      text: 'Docker environments and CI/CD pipelines, with release management on an Agile process.',
    },
    {
      title: 'Hand over',
      text: 'Technical documentation, knowledge transfer to clients and mentoring for the team.',
    },
  ],
  experience: [
    {
      when: 'May 2022 – Present',
      title: 'Senior Software Engineer, Content Systems',
      where: 'Northwestern Mutual · New York City area',
      points: [
        "Build new features for the Drupal CMS that powers Northwestern Mutual's client-facing content experiences, working within the engineering team on the marketing technology side to extend the platform.",
        'Do backend-focused work on headless Drupal and its APIs, collaborating on design and testing with marketing, editorial, design and sister engineering teams.',
        'Build front-end components, content types and templated pages for the NM.com "Life and Money" blog with Vue.js, React, HTML and related browser technologies.',
        'Partner with the design team on concepts, identify UI/UX patterns used across NM.com web properties, and maintain these composable pieces.',
        'Write documentation and integration tests for the content systems.',
        'Support stakeholders directly, troubleshooting usage problems and helping the product team shape feature requirements.',
        "Contribute code and review teammates' code as part of the software team.",
      ],
      tags: ['Drupal', 'Headless Drupal', 'APIs', 'Vue.js', 'React', 'JavaScript', 'HTML', 'Integration testing'],
    },
    {
      when: 'May 2021 – May 2022',
      title: 'Drupal Developer',
      where: 'ITTDigital · North Brunswick, New Jersey',
      points: [
        'Served as a Drupal solutions architect and subject matter expert, guiding internal and external teams on implementation projects.',
        'Worked with distributed teams across the US, Mexico and India, including project and product managers and developers.',
        'Met with clients to evaluate business requirements and prepared high-level and component-level architecture for Drupal web applications.',
        'Built custom Drupal modules and themes, and integrated third-party APIs and applications into existing Drupal systems.',
        'Owned delivery through the SDLC as team lead, technical architect and module lead. Wrote BRDs, SRSs, technical and design documents, milestone plans, delivery notes and change requests, and gave clients post-deployment knowledge transfers.',
        'Set up Docker test and dev environments and CI/CD with Jenkins, Git/GitLab, Jira and Ansible.',
        'Maintained content sharing architecture and database configuration, patched and debugged sites, reviewed systems against industry standards, and mentored developers on best practices.',
      ],
      tags: ['Drupal', 'PHP', 'Docker', 'Jenkins', 'GitLab', 'Ansible', 'Jira', 'Vue.js', 'React', 'Hugo', 'Gatsby'],
    },
    {
      when: 'Feb 2019 – May 2021',
      title: 'Drupal Developer',
      where: 'IT Trailblazers · Client: global pharmaceutical company',
      points: [
        'Developed 100+ solutions for the brands and divisions of a global pharmaceutical company across North America, LATAM and APAC.',
        'Moved 250+ websites to Cloudflare DNS, with a PHP 7.1 upgrade and security fixes. Integrated apps with Janrain and the GRV database, and set up SSO login.',
        'Re-architected a pharmaceutical brand website and its content strategy: migrated all data, built the new site and a custom Drupal theme, and simplified the authoring experience.',
        'Built custom modules for Acquia Solr advanced search (AND, OR, NOT filters), a private file system that restricts confidential items, and a cron-based broken-link report.',
        'Ran core updates with Composer, resolved conflicts and patches, and built content types, blocks, views and role-based dashboards.',
        'Mentored developers and handed projects over to clients with technical and handover documentation.',
      ],
      tags: ['Drupal', 'Composer', 'Acquia Solr', 'Views', 'Workbench Moderation', 'Cloudflare DNS', 'Janrain SSO', 'PHP'],
    },
    {
      when: 'Sep 2017 – Jan 2019',
      title: 'Technical Lead',
      where: 'IT Trailblazers · Greater Bengaluru Area, India',
      points: [
        'Automated builds, packaging and releases across environments with Jenkins, GitLab, Jira and Ansible. Containerized test and dev environments with Docker.',
        'Helped build the corporate template and onboarded the corporate website of a global pharmaceutical company to Drupal Site Factory.',
        'Gathered requirements, created architecture and data models, defined system-testing criteria and the SDLC, and set release management strategy on an Agile process.',
        'Developed 100+ websites and applications on Drupal and core PHP, with Twig templates tested across browsers and devices.',
      ],
      tags: ['Drupal Site Factory', 'Drupal', 'Twig', 'Jenkins', 'Docker', 'Ansible', 'GitLab', 'Jira'],
    },
    {
      when: 'Jul 2012 – Aug 2017',
      title: 'Technical Lead · Software Developer',
      where: 'Zolipe Solutions · Greater Bengaluru Area, India',
      points: [
        'Technical Lead (Dec 2015 – Aug 2017): guided the delivery team, gathered requirements and communicated changes to developers.',
        'Built PHP and MySQL web applications on a LAMP stack, including Zend Framework with Oracle, and created and consumed SOAP and XML-RPC web services.',
        'Software Developer (Jul 2012 – Dec 2015): turned design mockups into Drupal websites with custom modules and themes, kept accessible and cross-browser, and earned the Acquia Certified Site Builder certification.',
        'Built AJAX sites with the Foundation framework and a custom jQuery accordion plugin.',
      ],
      tags: ['Drupal', 'PHP', 'MySQL', 'Zend', 'Oracle', 'SOAP', 'XML-RPC', 'jQuery', 'Foundation', 'HTML5 & CSS3'],
    },
  ] satisfies Experience[],
  education: [
    'Bachelor of Engineering, Information Science, Sambhram Institute of Technology, Bangalore (2007 – 2011)',
    'Pre-university (Biology), Jindal First Grade College, Bangalore (2005 – 2007)',
  ],
  skills: [
    {
      title: 'CMS (Drupal)',
      items: ['Drupal', 'Headless Drupal', 'Drupal Site Factory', 'WordPress', 'Custom modules', 'Custom themes', 'Twig', 'Composer', 'Acquia Solr', 'Views', 'SSO'],
    },
    {
      title: 'Languages and front end',
      items: ['PHP 7/8 (OOP)', 'JavaScript', 'jQuery', 'AJAX', 'React', 'Vue.js', 'Next.js', 'Nuxt', 'Node.js', 'HTML5', 'CSS3', 'Bootstrap', 'Foundation', 'Markdown', 'Hugo', 'Gatsby', 'Canvas web builder'],
    },
    {
      title: 'APIs and data',
      items: ['REST', 'JSON', 'XML', 'SOAP', 'XML-RPC', 'MySQL', 'SQL', 'Microsoft SQL Server', 'Oracle'],
    },
    {
      title: 'DevOps and environments',
      items: ['Docker', 'Jenkins', 'Ansible', 'GitLab', 'AWS', 'Google Cloud', 'Vagrant', 'DDEV', 'Lando', 'Acquia Dev Desktop', 'Apache', 'Cloudflare DNS', 'Linux', 'macOS'],
    },
    {
      title: 'Process and tools',
      items: ['Git', 'GitHub', 'SVN', 'Jira', 'Agile', 'SDLC', 'Unit and integration testing', 'Release management'],
    },
  ] satisfies SkillGroup[],
  certifications: [
    'Acquia Certified Developer, Drupal 9',
    'Acquia Certified Developer, Drupal 8',
    'Acquia Certified Front-End Specialist, Drupal 8',
    'Acquia Certified Site Builder, Drupal 8',
    'Acquia Certified Cohesion Site Builder, Drupal 8',
    'Acquia Certified Site Builder, Drupal 7',
    'LinkedIn Learning: PHP Essential Training; PHP: Object-Oriented Programming',
  ],
};

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#focus', label: 'What I do' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact me', cta: true },
] as const;
