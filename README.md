# PlaywrightPad

> A hands-on laboratory for exploring, stress-testing, and refining modern end-to-end testing techniques with [Playwright](https://playwright.dev) — turning experiments into reusable best practices for any project.

[![Tests](https://github.com/sparkbugx/PlaywrightPad/actions/workflows/playwright.yml/badge.svg)](https://github.com/sparkbugx/PlaywrightPad/actions/workflows/playwright.yml)

---

## About This Project

PlaywrightPad is a dedicated playground for **investigating new approaches to automated testing**. Rather than shipping a product, its purpose is continuous improvement of the craft itself: experimenting with different locating strategies, assertion styles, and structural patterns to discover what makes an end-to-end suite truly **robust, readable, and maintainable**.

Every technique validated here is designed to be portable — the lessons learned are meant to raise the quality bar of test automation across *any* codebase, framework, or team.

### Why It Matters

Fragile selectors, ambiguous assertions, and copy-paste test logic are the most common reasons suites rot and teams lose trust in them. This project treats those problems head-on:

- **Resilience first** — locators are built around user-visible semantics (`getByLabel`, roles, associated labels) instead of brittle CSS paths or implementation details, so tests keep passing while the UI evolves.
- **Readability as a requirement** — each spec reads like documentation of user behavior, so anyone (QA, developer, or stakeholder) can understand what is being verified and why.
- **Proof over theory** — every pattern runs against real public practice pages ([playwrightpad.com](https://playwrightpad.com/practice/fill-actions/)) across Chromium, Firefox, and WebKit before being considered "learned."

## What's Inside

| Spec | Skill Demonstrated |
| --- | --- |
| `navigateToTargetPage.spec.ts` | Navigation and URL handling |
| `veriyPageTittle.spec.ts` | Page metadata assertions |
| `verifyTextElementIsVisible.spec.ts` | Visibility checks with web-first assertions |
| `simulateButtonClick.spec.ts` | Actionability-aware interactions |
| `fillOutFormTextInput.spec.ts` | Accessible locators (`getByLabel`) and value assertions |
| `checkAndUncheckCheckbox.spec.ts` | Toggle state management |
| `verifyPageUrl.spec.ts` | URL validation strategies |

## Key Practices Applied

- **User-facing locators** over implementation-coupled selectors (`getByLabel`, `getByRole`) — resilient to class/id refactors and aligned with accessibility standards.
- **Web-first assertions** (`toHaveValue`, `toBeVisible`) — no manual waits, no flaky sleeps.
- **Single source of truth per element** — locators are declared once and reused for action and assertion.
- **Strict-mode awareness** — every selector targets exactly one element, eliminating silent ambiguity.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- Network access — specs run against live public practice sites

### Installation

```bash
npm ci
npx playwright install
```

## Running Tests

There are no npm scripts — everything goes through the Playwright CLI:

```bash
# Full suite (Chromium, Firefox, and WebKit)
npx playwright test

# Single file
npx playwright test tests/fillOutFormTextInput.spec.ts

# Single test by title
npx playwright test -g "has title"

# Fast local iteration on one engine
npx playwright test --project=chromium

# Open the interactive HTML report after a run
npx playwright show-report
```

## Project Structure

```
├── tests/                  # Executable specs (the only directory the runner picks up)
├── .github/workflows/      # CI pipeline definition
├── playwright.config.ts    # Cross-browser projects, retries, tracing
└── playwright-report/      # Generated HTML report (after a run)
```

## Configuration Highlights

Defined in [`playwright.config.ts`](playwright.config.ts):

- **Three browser engines** — Chromium, Firefox, and WebKit on every full run.
- **Full parallelism** locally for fast feedback.
- **CI-only safeguards** — `forbidOnly` blocks accidental `test.only` commits; retries (2×) absorb transient network noise.
- **Trace on first retry** — failed tests automatically produce a debuggable trace when it matters most.

## Continuous Integration

A GitHub Actions workflow (`.github/workflows/playwright.yml`) runs the entire matrix on every push and pull request to `main`/`master`: install dependencies → install browsers with system deps → execute all tests. Green badge at the top of this file reflects the current state of the suite.

## Roadmap Ideas

- [ ] Fixtures and Page Object Model refactorings
- [ ] Network interception and API mocking patterns
- [ ] Visual comparison testing experiments
- [ ] Accessibility auditing with `@axe-core/playwright`

---

Built as an ongoing study in test craftsmanship — clone it, break it, improve it.
