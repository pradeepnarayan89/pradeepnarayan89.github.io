# pradeepnarayan89.github.io

Personal portfolio of Pradeep Narayana. Built with Next.js (App Router, TypeScript) as a static export and deployed to GitHub Pages by a CI/CD pipeline.

Live site: https://pradeepnarayan89.github.io/

## Stack

- Next.js with `output: 'export'`, so the build is plain static files in `out/`
- TypeScript, plain CSS, no runtime dependencies beyond React
- Vitest and Testing Library for tests
- commitlint and husky for Conventional Commits
- semantic-release for versioning, tags, GitHub releases and the changelog

## Project layout

```
src/app/          layout, page, global styles, icon
src/components/   sidebar, nav, theme toggle and page sections
src/data/         all page content in one typed file (profile.ts)
tests/            unit and component tests
scripts/          post-build smoke test
public/           photo and .nojekyll
.github/          CI/CD workflow and Dependabot config
```

To change the text on the site, edit `src/data/profile.ts`.

## Local development

Requires Node 22 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run ci         # typecheck, tests, build and smoke test, same as the pipeline
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run typecheck` | Run `tsc --noEmit` |
| `npm test` | Run unit and component tests once |
| `npm run build` | Build the static site into `out/` |
| `npm run test:build` | Smoke-test `out/` (see below) |
| `npm run ci` | Everything above, in order |

## Commit convention

Commits follow [Conventional Commits](https://www.conventionalcommits.org/). A husky `commit-msg` hook runs commitlint, and the pipeline checks again.

| Type | Effect on version |
| --- | --- |
| `feat:` | minor release |
| `fix:`, `perf:` | patch release |
| `feat!:` or a `BREAKING CHANGE:` footer | major release |
| `docs:`, `test:`, `ci:`, `build:`, `chore:`, `refactor:`, `style:` | no release |

Example: `fix(privacy): strip device metadata from headshot`

## CI/CD

One workflow, `.github/workflows/ci-cd.yml`:

1. **Verify and build** (every pull request and every push to `master`)
   commit message lint, typecheck, unit tests, static build, smoke test of `out/`
2. **Deploy** (push to `master` only, after verify passes)
   publishes `out/` to GitHub Pages
3. **Release** (push to `master` only, after deploy succeeds)
   semantic-release reads the commits, picks the next version, updates `CHANGELOG.md` and `package.json`, creates the tag and the GitHub release

A pull request never deploys or releases. A failing check stops everything after it.

### What the smoke test checks

`scripts/check-build.mjs` fails the build if:

- the page title, description or single `<h1>` is missing
- an in-page `#anchor` has no matching element
- a referenced local file is missing from `out/`
- an email address, `mailto:` or `tel:` link appears in any exported page
- the portrait carries device metadata (EXIF make, model, GPS or capture date)
- `.nojekyll` is missing

## One-time repository setup

- Settings, Pages, Source: **GitHub Actions**
- Settings, Actions, General, Workflow permissions: allow read and write (semantic-release pushes the changelog commit)
- If `master` becomes a protected branch, allow the Actions bot to push to it, or switch semantic-release to a release-branch flow
