// Smoke test for the static export. Run after `next build`, before deploying.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const OUT = 'out';
const failures = [];
const fail = (message) => failures.push(message);

if (!existsSync(join(OUT, 'index.html'))) {
  console.error(`check-build: ${OUT}/index.html not found. Did the build run?`);
  process.exit(1);
}

const html = readFileSync(join(OUT, 'index.html'), 'utf8');

// 1. Basic page structure
if (!/<title>[^<]*Pradeep Narayana[^<]*<\/title>/.test(html)) fail('page title is missing the name');
if (!/<meta name="description" content="[^"]{20,}"/.test(html)) fail('meta description is missing');
if ((html.match(/<h1[ >]/g) ?? []).length !== 1) fail('page must have exactly one <h1>');

// 2. Every in-page link points at an element that exists
const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
for (const [, hash] of html.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.has(hash)) fail(`anchor #${hash} has no matching id`);
}

// 3. Referenced local assets were exported
for (const [, path] of html.matchAll(/(?:src|href)="(\/[^"]*)"/g)) {
  if (path.startsWith('//')) continue;
  const clean = path.split('?')[0];
  if (!existsSync(join(OUT, clean))) fail(`referenced file ${clean} is missing from ${OUT}/`);
}

// 4. No contact details leaked into any exported page
const pages = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else if (name.endsWith('.html')) pages.push(full);
  }
})(OUT);

for (const page of pages) {
  const text = readFileSync(page, 'utf8');
  if (/[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+\.[A-Za-z.]{2,}/.test(text.replace(/<script[\s\S]*?<\/script>/g, ''))) {
    fail(`${page} contains an email address`);
  }
  if (/(?:mailto|tel):/.test(text)) fail(`${page} contains a mailto: or tel: link`);
}

// 5. The portrait must not carry device metadata (EXIF make, model, GPS, dates)
const photo = readFileSync(join(OUT, 'photo.jpg')).toString('latin1');
for (const marker of ['Apple', 'iPhone', 'GPSLatitude', 'DateTimeOriginal']) {
  if (photo.includes(marker)) fail(`photo.jpg still contains "${marker}" metadata`);
}

// 6. GitHub Pages must not run Jekyll over the _next folder
if (!existsSync(join(OUT, '.nojekyll'))) fail('.nojekyll is missing from the export');

if (failures.length > 0) {
  console.error(`check-build: ${failures.length} problem(s)`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log(`check-build: ok (${pages.length} page(s) checked)`);
