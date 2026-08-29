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

## Test Suite Catalog

Every spec below exercises one isolated behavior on live practice pages hosted at [playwrightpad.com](https://playwrightpad.com/practice/basic-navigation/) and runs against all three browser engines on each execution.

### Navigation & Page Metadata

**`tests/navigateToTargetPage.spec.ts`**
The suite's entry point. Validates that the browser reliably reaches the *Basic Navigation* practice module, exercising Playwright's navigation lifecycle (`page.goto`) with its built-in auto-waiting — the foundational flow every subsequent interaction builds upon.

**`tests/veriyPageTittle.spec.ts`**
A first-line integrity check that confirms the correct document has loaded by asserting the exact page title (*Practice: Basic Navigation*). Guards against misrouted deployments and content regressions surfacing at the highest level of the page.

**`tests/verifyPageUrl.spec.ts`**
Asserts that the final URL after navigation matches expectations, protecting against silent redirects, broken deep links, and unintended route rewrites.

**`tests/verifyTextElementIsVisible.spec.ts`**
Applies web-first visibility assertions (`toBeVisible`) to confirm critical UI elements actually render for the user — no fixed sleeps, no polling loops — demonstrating Playwright's actionability-aware waiting model.

### User Interaction & Form Handling

**`tests/simulateButtonClick.spec.ts`**
Locates a control purely by its accessible name through role-based selectors (`getByRole`), performs a genuine click, and verifies the application's visible feedback in response. Showcases accessibility-first locating paired with event-driven outcome verification.

**`tests/fillOutFormTextInput.spec.ts`**
Drives a realistic data-entry flow: populates a text field and confirms the submitted value persists correctly (`toHaveValue`). Illustrates dependable input simulation and post-action state validation.

**`tests/checkAndUncheckCheckbox.spec.ts`**
Targets boolean form controls — checking and unchecking while asserting the resulting state transitions. *(Currently in active development.)*

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

# Playwright Report Enhancements — TODO

> 7 ways to take the generated HTML report from "raw log" to a decision-ready dashboard.
> Plan only — each item will be checked off as it gets implemented.

1. [ ] **Smarter filtering** — Don't drown in data. Add filters to highlight failed, flaky, or skipped tests so teams focus on what matters, cutting cognitive load and pointing attention straight at problem areas instead of endless passes.

2. [ ] **Custom metadata & insights** — Attach build tags, environments, or feature labels to each run. This turns reports from raw logs into contextual stories, letting teams trace failures back to specific releases or modules instantly.

3. [ ] **Visual clarity with charts** — Numbers alone don't tell the full story. Add trend charts, pie breakdowns, or heatmaps to visualize failure patterns, so a quick glance reveals whether issues are isolated or systemic.

4. [ ] **Actionable grouping** — Group results by feature, module, or user journey. Instead of "20 failed tests," you see "Checkout flow failing in 3 modules," which directs fixes faster.

5. [ ] **Flaky test detection** — Highlight tests that fail intermittently across runs. Flaky tests erode trust in automation; flagging them helps teams prioritize stabilization and restore confidence in the suite.

6. [ ] **Cross-team accessibility** — Reports shouldn't be locked to QA. Share enriched dashboards with devs, product managers, and business stakeholders. When everyone sees the same insights, alignment and accountability improve.

7. [ ] **Continuous improvement loop** — Treat reports as feedback engines. Use their insights to refine test design, enhance coverage, and sharpen the automation strategy. Reports aren't just outputs — they're inputs for smarter QA.


Locator Chaining basics
