# AGENTS.md

Playwright end-to-end testing playground (Node + TypeScript, CommonJS).

## Commands

There are no npm scripts. Run everything via `npx playwright`:

- All tests: `npx playwright test`
- One file: `npx playwright test tests/verifyTextElementIsVisible.spec.ts`
- One test: `npx playwright test -g "has title"`
- One browser: `npx playwright test --project=chromium`
- First-time setup / after adding browsers: `npx playwright install`

## Gotchas

- Only `tests/` is picked up by the runner (`testDir` in `playwright.config.ts`). Scripts under `Playwright Basics/` are practice snippets and are NOT run by `npx playwright test` unless invoked by path. Keep real specs in `tests/`.
- The `Playwright Basics/` folder name contains a space — always quote paths referencing it.
- Every spec runs against chromium, firefox, and webkit (3x per test). Use `--project=chromium` for fast local iteration.
- Tests navigate to live public sites (playwright.dev, playwrightpad.com) and need network access; failures may be site-side, not code-side.

## CI

GitHub Actions (`.github/workflows/playwright.yml`) runs on push/PR to `main`/`master`: `npm ci`, `npx playwright install --with-deps`, then `npx playwright test`. `forbidOnly` is active on CI, so never leave `test.only` behind. Retries (2) and trace-on-retry apply only on CI.
