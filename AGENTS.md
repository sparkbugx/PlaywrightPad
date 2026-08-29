# AGENTS.md

Playwright end-to-end testing playground (Node + TypeScript, CommonJS).

## Commands

Always run tests through the npm wrappers so the generated HTML report is re-themed (light mode + professional styling) after each run. The raw `npx playwright test` command leaves the report in the default "system" theme (dark on dark OS).

- All tests: `npm test`
- One browser (fast): `npm run test:chromium`
- Extra args pass through, e.g. `npm test -- tests/foo.spec.ts` or `npm run test:chromium -- -g "has title"`
- One file (raw, un-themed): `npx playwright test tests/verifyTextElementIsVisible.spec.ts`
- First-time setup / after adding browsers: `npx playwright install`

Theme pipeline:
- `scripts/run-tests.mjs` runs `npx playwright test <args>` and then calls `scripts/patch-report.mjs` AFTER the report is written to disk.
- `scripts/patch-report.mjs` injects a `light-mode` class, forces `localStorage['theme']='light-mode'`, and applies professional CSS into `playwright-report/index.html`. Safe to run on the command line directly (`node scripts/patch-report.mjs`).
- Never try to theme via `globalSetup`/`globalTeardown` — those run BEFORE Playwright writes the report, so the patch won't persist.

## Gotchas

- Only `tests/` is picked up by the runner (`testDir` in `playwright.config.ts`). Scripts under `Playwright Basics/` are practice snippets and are NOT run by `npx playwright test` unless invoked by path. Keep real specs in `tests/`.
- The `Playwright Basics/` folder name contains a space — always quote paths referencing it.
- Every spec runs against chromium, firefox, and webkit (3x per test). Use `--project=chromium` for fast local iteration.
- Tests navigate to live public sites (playwright.dev, playwrightpad.com) and need network access; failures may be site-side, not code-side.

## CI

GitHub Actions (`.github/workflows/playwright.yml`) runs on push/PR to `main`/`master`: `npm ci`, `npx playwright install --with-deps`, then `npm test` (which themes the report for the uploaded artifact). `forbidOnly` is active on CI, so never leave `test.only` behind. Retries (2) and trace-on-retry apply only on CI.
