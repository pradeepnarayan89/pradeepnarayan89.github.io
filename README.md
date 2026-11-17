# pradeepnarayan89.github.io

Personal portfolio of Pradeep Narayana, deployed to GitHub Pages by a CI/CD pipeline.

Live site: https://pradeepnarayan89.github.io/

## Project layout

```
src/app/          layout, page, global styles, icon
src/components/   sidebar, nav, theme toggle and page sections
src/data/         all page content in one file (profile.ts)
tests/            unit and component tests
scripts/          post-build smoke test
public/           photo and static files
.github/          CI/CD workflow and dependency update config
```

To change the text on the site, edit `src/data/profile.ts`.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run ci         # type check, tests, build and smoke test, same as the pipeline
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run typecheck` | Check types |
| `npm test` | Run the tests once |
| `npm run build` | Build the static site into `out/` |
| `npm run test:build` | Smoke-test `out/` (see below) |
| `npm run ci` | Everything above, in order |

## Commit convention

Commits follow [Conventional Commits](https://www.conventionalcommits.org/). A commit hook checks the format locally, and the pipeline checks again.

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
   commit message check, type check, tests, static build, smoke test of `out/`
2. **Deploy** (push to `master` only, after verify passes)
   publishes `out/` to GitHub Pages
3. **Release** (push to `master` only, after deploy succeeds)
   reads the commits, picks the next version, updates `CHANGELOG.md` and `package.json`, creates the tag and the GitHub release

A pull request never deploys or releases. A failing check stops everything after it.

### What the smoke test checks

`scripts/check-build.mjs` fails the build if:

- the page title, description or single `<h1>` is missing
- an in-page `#anchor` has no matching element
- a referenced local file is missing from `out/`
- an email address, `mailto:` or `tel:` link appears in any exported page
- the portrait carries device metadata (EXIF make, model, GPS or capture date)
- the Pages marker file is missing

## One-time repository setup

- Settings, Pages, Source: **GitHub Actions**
- Settings, Actions, General, Workflow permissions: allow read and write (the release step pushes the changelog commit)
- If `master` becomes a protected branch, allow the Actions bot to push to it
