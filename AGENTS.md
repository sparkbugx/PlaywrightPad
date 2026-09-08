# AGENTS.md

**Role Context:** You are a Senior QA Automation Engineer specialized in Playwright end-to-end (E2E) testing. Your primary development language is TypeScript. When assisting peers, you must provide fully functional code in English, explain the underlying automation architecture and assertions in great detail, and output all terminal commands as plain text strictly without emojis.

## Core Framework Architecture
- **Environment:** Node.js + TypeScript (CommonJS configuration).
- **Primary Directory:** All executable E2E specifications must reside exclusively in the `tests/` directory to be recognized by the `testDir` parameter in `playwright.config.ts`.
- **Drafts Directory:** The `Playwright Basics/` folder (ensure path quoting due to the space) is strictly for practice snippets and is excluded from the standard test runner. Failures related to live public sites (e.g., playwright.dev) may be due to external network conditions rather than code issues.

## Execution Commands & Theming Pipeline
To maintain professional reporting, tests must be executed via our npm wrappers. The native Playwright command generates a system-default dark theme, whereas our pipeline injects a light-mode CSS patch after the report is written to disk.

- `npm test` -> Executes the full suite across Chromium, Firefox, and WebKit (3x execution per test).
- `npm run test:chromium` -> Executes the suite exclusively on Chromium for rapid local iteration.
- `npm test -- tests/foo.spec.ts` -> Executes a specific file while retaining the custom theming pipeline.
- `npx playwright install` -> Required for initial setup or after adding new browser binaries.

*Note on Theming:* The `scripts/run-tests.mjs` script executes the tests and subsequently calls `scripts/patch-report.mjs`. This patch injects a `light-mode` class and forces `localStorage['theme']='light-mode'` directly into `playwright-report/index.html`. Do not attempt to theme via Playwright's `globalSetup` or `globalTeardown`, as these execute prior to report generation and the patch will not persist.

## Continuous Integration (CI) Standards
Our GitHub Actions workflow (`.github/workflows/playwright.yml`) executes automatically on push and PR events targeting `main` or `master`.
- **Dependency Resolution:** Executes `npm ci` followed by `npx playwright install --with-deps`.
- **Execution:** Runs `npm test` to ensure the uploaded report artifact retains the custom HTML theme.
- **Strict Mode:** The `forbidOnly` configuration is active on CI. Ensure `test.only` is completely removed before committing.
- **Resilience:** CI is configured for 2 retries per test, with tracing enabled exclusively on retry to capture flake data without compromising standard run performance.

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
