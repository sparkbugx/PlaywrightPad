# Best Websites for Practicing Test Automation

> Looking for demo sites to practice Selenium, Playwright, or Cypress against? Here is a curated list of the best websites for sharpening your test automation skills.

---

## Table of Contents

- [Why Practice on Demo Sites?](#why-practice-on-demo-sites)
- [Scenarios to Practice](#scenarios-to-practice)
- [Demo Websites for UI Automation](#demo-websites-for-ui-automation)
- [API Testing Sites](#api-testing-sites)
- [QA SEO Content Roadmap 2026](#qa-seo-content-roadmap-2026)
- [Playwright Quiz & Practice Questions](#playwright-quiz--practice-questions)
- [TestDino — Playwright Cloud Companion](#testdino--playwright-cloud-companion)
- [More Reading](#more-reading)

---

## Why Practice on Demo Sites?

Before investing time in building a full test suite on a new framework, try it against a variety of websites to make sure it performs reliably and is easy to work with. For example, if you use Selenium but are curious about Playwright, Cypress, WebDriverIO, or Nightwatch — push beyond the basic hello-world and exercise each framework against real-world challenges.

That way you won't get deep into a migration only to discover your framework of choice can't handle a scenario your project requires.

---

## Scenarios to Practice

These are the harder-to-automate situations you should validate your framework against:

| Scenario | Why It Matters |
| --- | --- |
| **iFrames** | Requires context-switching between frames |
| **Modal dialogs** | Tests overlay handling and focus management |
| **New tabs / windows** | Forces multi-page context management |
| **Asynchronous loading** | Validates wait strategies and auto-waiting |
| **File upload dialogs** | Needs OS-level or input-element tricks |
| **Shadow DOM** | Standard CSS selectors can't pierce the boundary |

---

## Demo Websites for UI Automation

### ["The Internet"](http://the-internet.herokuapp.com)

> **URL:** [the-internet.herokuapp.com](http://the-internet.herokuapp.com) | **Source:** [GitHub](https://github.com/tourdedave/element-interactions)

A collection of common test automation scenarios: nested frames, shadow DOM, keypresses, drag-and-drop, and complicated DOMs. Hosting can be unreliable — fall back to the GitHub repo if the live site is down.

| Strengths |
| --- |
| Nested frames |
| Shadow DOM |
| Dynamic content |
| Key presses |

---

### [Automation Exercise](https://automationexercise.com)

A clothing storefront with a full web front end **and** APIs. Includes guided test cases so you can compare your automation against expected behavior.

| Strengths |
| --- |
| E-commerce flows |
| API endpoints |
| Provided test cases |

---

### [LetCode](https://letcode.in)

Isolates examples around individual DOM elements — inputs, tables, alerts, slides, calendars, and more — so you can practice element-specific interactions in focused exercises.

| Strengths |
| --- |
| Element-focused drills |
| Tables & alerts |
| Sliders & calendars |

---

### [UI Test Automation Playground](http://uitestingplayground.com)

A compact site packed with edge cases: load delays, mouse-over behavior, dynamic IDs, and hidden-layer issues that trip up naive automation.

| Strengths |
| --- |
| Load delays |
| Dynamic IDs |
| Hidden layers |
| Mouse-over traps |

---

### [SwagLabs (Sauce Demo)](https://www.saucedemo.com)

A demo storefront for login and shopping-cart flows. Four different accounts let you trigger distinct behaviors: **standard**, **locked-out**, **problem**, and **performance-glitch** user.

| Strengths |
| --- |
| Multiple user personas |
| Login & checkout flows |
| maintained by SauceLabs |

---

### [Angular Banking App (GlobalsQA)](https://globalsqa.com/angularJs-protractor/BankingProject/#/login)

A small Angular-based bank site with login, transaction listing, deposits, and withdrawals — useful for validating framework compatibility with Angular's change detection.

| Strengths |
| --- |
| Angular-specific |
| Login workflows |
| Transaction CRUD |

---

### [Sandbox Form (AutomateNow)](https://www.automatenow.io/sandbox-form/)

A single-page form sandbox for practicing typical form controls, search interactions, pop-up dialogs, and embedded maps.

| Strengths |
| --- |
| Form controls |
| Pop-up dialogs |
| Embedded map |

---

### [QA-Practice](https://qa-practice.com)

A clean e-commerce site combining multiple exercises: common web elements, a Swagger-documented API, and a deliberately buggy web form for bug-hunting challenges.

| Strengths |
| --- |
| Web elements |
| Swagger API docs |
| Buggy form for exploration |

---

### [The Sweet Shop](https://sweetshop.netlify.app)

A fake candy-store e-commerce front end with hidden defects: account login, shopping cart, product pages, and non-US currency handling.

| Strengths |
| --- |
| Hidden defects |
| Shopping cart |
| Non-US currency |

---

## API Testing Sites

For practicing with SuperTest, Mocha, Postman, or any REST client:

### [Swagger Petstore](https://petstore.swagger.io)

Manage a sample pet store inventory via REST. Great for learning Swagger documentation and practicing full CRUD API testing.

### [Restful Booker](https://restful-booker-api.herokuapp.com)

Full CRUD operations with authentication support — ideal for practicing token-based API test flows.

### [FakeRestAPI](https://fakerestapi.azurewebsites.net)

REST endpoints around a book-store inventory. No auth support, but useful for practicing read/write operations. (Pair with Restful Booker above if you need auth.)

### [Star Wars API (SWAPI)](https://swapi.dev)

A well-documented public API for Star Wars data — perfect for building Postman collections or automated API test suites.

---

## QA SEO Content Roadmap 2026

> **Source:** [QASkills.sh — 100-Topic QA SEO Content Roadmap](https://qaskills.sh/roadmaps/qa-seo-content-roadmap-2026)

A structured publishing plan organizing **100 unique search topics** into ten hub-and-spoke clusters covering Playwright, AI testing, RAG evaluation, and MCP server security. Designed for QA engineers, technical writers, and content teams building topical authority in the AI-assisted testing space.

### Cluster Overview

| # | Cluster | Focus Area | Wave 1 Articles | Wave 2 Backlog |
|---| --- | --- | --- | --- |
| 1 | [Playwright Testing in 2026](#cluster-1-playwright-testing-in-2026) | Core browser automation, v1.60–1.61 features | 5 | 5 |
| 2 | [Playwright CLI for Coding Agents](#cluster-2-playwright-cli-for-coding-agents) | Terminal automation, sessions, tracing | 5 | 5 |
| 3 | [Playwright MCP Browser Automation](#cluster-3-playwright-mcp-browser-automation) | AI client ↔ browser via MCP | 5 | 5 |
| 4 | [Playwright Test Agents](#cluster-4-playwright-test-agents) | Planner, Generator, Healer loops | 5 | 5 |
| 5 | [AI-Powered Test Automation](#cluster-5-ai-powered-test-automation) | AI4Testing vs Testing AI strategies | 5 | 5 |
| 6 | [LLM and AI Agent Testing](#cluster-6-llm-and-ai-agent-testing) | Evals, judges, CI gates, agents | 5 | 5 |
| 7 | [DeepEval LLM Testing](#cluster-7-deepeval-llm-testing) | Pytest-style LLM/agent evaluations | 5 | 5 |
| 8 | [Promptfoo Evaluation & Red Teaming](#cluster-8-promptfoo-evaluation--red-teaming) | Eval matrices, vulnerabilities, MCP | 5 | 5 |
| 9 | [RAG Testing and Evaluation](#cluster-9-rag-testing-and-evaluation) | Retrieval, generation, citation quality | 5 | 5 |
| 10 | [MCP Server Testing & Security](#cluster-10-mcp-server-testing--security) | Protocol, Inspector, OAuth, SSRF | 5 | 5 |

---

### Cluster 1: Playwright Testing in 2026

> QA engineers and developers building browser automation suites. Covers version 1.60–1.61 features with distinct task-level intent.

#### Wave 1 — Ready Locally

| Type | Article | Keyword |
| --- | --- | --- |
| **Pillar** | [Playwright Testing Complete Guide for Reliable E2E Automation in 2026](https://qaskills.sh/blog/playwright-e2e-complete-guide) | `playwright testing guide` |
| Child | [Playwright 1.61 WebAuthn Passkey Testing with Virtual Authenticators](https://qaskills.sh/blog/playwright-1-61-webauthn-passkeys-guide-2026) | `playwright webauthn passkey testing` |
| Child | [Playwright localStorage and sessionStorage API Guide for Version 1.61](https://qaskills.sh/blog/playwright-1-61-web-storage-api-guide-2026) | `playwright localstorage sessionstorage api` |
| Child | [Playwright Locators Best Practices: Roles, Strictness, and Stability](https://qaskills.sh/blog/playwright-locators-best-practices-2026) | `playwright locators best practices` |
| Child | [Playwright BrowserContext Guide for Isolation and Parallel Sessions](https://qaskills.sh/blog/playwright-browser-context-guide-2026) | `playwright browser context` |

#### Wave 2 — Backlog

| Article | Keyword |
| --- | --- |
| Playwright tracing.startHar Guide for Network Evidence and Debugging | `playwright tracing starthar` |
| Playwright locator.drop Tutorial for File and DataTransfer Testing | `playwright locator drop` |
| Playwright ARIA Snapshot Boxes for AI-Assisted Browser Testing | `playwright aria snapshot boxes` |
| Playwright Video Retention Modes Explained for CI Failures and Retries | `playwright video retention modes` |
| Playwright test.abort Guide for Safety Guardrails in Test Fixtures | `playwright test abort` |

---

### Cluster 2: Playwright CLI for Coding Agents

> QA engineers and coding-agent users automating browsers from a terminal. Covers dedicated capabilities, sessions, dashboard, debugging, tracing, and video workflows.

#### Wave 1 — Ready Locally

| Type | Article | Keyword |
| --- | --- | --- |
| **Pillar** | [Playwright CLI Complete Guide for Browser Automation and AI Agents](https://qaskills.sh/blog/playwright-cli-complete-guide-2026) | `playwright cli` |
| Child | [How to Install Playwright CLI Skills in Codex and Claude Code](https://qaskills.sh/blog/playwright-cli-install-quickstart-2026) | `playwright cli install skills` |
| Child | [Playwright CLI Accessibility Snapshots and Element References Explained](https://qaskills.sh/blog/playwright-cli-accessibility-snapshots-guide-2026) | `playwright cli snapshot` |
| Child | [Run Parallel Playwright CLI Sessions with PLAYWRIGHT\_CLI\_SESSION](https://qaskills.sh/blog/playwright-cli-sessions-dashboard-attach-guide-2026) | `playwright cli parallel sessions` |
| Child | [Debug Playwright Tests with --debug=cli and Agent Trace Commands](https://qaskills.sh/blog/playwright-cli-debug-tests-traces-agents-guide-2026) | `playwright debug cli` |

#### Wave 2 — Backlog

| Article | Keyword |
| --- | --- |
| Playwright CLI Network Inspection and Route Mocking Tutorial | `playwright cli network mocking` |
| Playwright CLI Storage State, Cookies, and Authentication Sessions | `playwright cli storage state` |
| Attach Playwright CLI to Existing Chrome with CDP or the Extension | `playwright cli attach chrome` |
| Record Agent Video Receipts with Playwright CLI Chapters and Actions | `playwright cli video recording` |
| Playwright CLI vs Playwright MCP: Which Interface Should Agents Use? | `playwright cli vs playwright mcp` |

---

### Cluster 3: Playwright MCP Browser Automation

> QA teams connecting AI clients to real browser workflows through MCP. Covers configuration, capability, profiles, endpoints, and security surfaces.

#### Wave 1 — Ready Locally

| Type | Article | Keyword |
| --- | --- | --- |
| **Pillar** | [Playwright MCP Complete Guide for Browser Automation with AI Agents](https://qaskills.sh/blog/playwright-mcp-browser-automation-guide) | `playwright mcp` |
| Child | [Playwright MCP Server Configuration Reference for QA Teams](https://qaskills.sh/blog/playwright-mcp-json-configuration-reference) | `playwright mcp configuration` |
| Child | [Playwright MCP Testing Capability: Assertions and Test Generation](https://qaskills.sh/blog/playwright-mcp-testing-capability-guide-2026) | `playwright mcp testing capability` |
| Child | [Playwright MCP Persistent, Isolated, and Browser Extension Profiles](https://qaskills.sh/blog/playwright-mcp-profile-modes-guide-2026) | `playwright mcp isolated profile` |
| Child | [Playwright MCP Security Best Practices for Files, Origins, and Secrets](https://qaskills.sh/blog/playwright-mcp-security-best-practices-2026) | `playwright mcp security` |

#### Wave 2 — Backlog

| Article | Keyword |
| --- | --- |
| Run Playwright MCP in Docker with Headless Chromium and HTTP | `playwright mcp docker` |
| Playwright MCP Remote HTTP Endpoint Setup for CI and Containers | `playwright mcp remote server` |
| Set Up Playwright MCP in Codex, Cursor, Claude Code, and Copilot | `playwright mcp setup coding agents` |
| Reduce Playwright MCP Token Use with Snapshots and Image Controls | `playwright mcp token usage` |
| Test Playwright MCP Workspace Roots and File Access Boundaries | `playwright mcp file access` |

---

### Cluster 4: Playwright Test Agents

> Teams using Planner, Generator, and Healer loops to create browser tests. Covers the three-agent workflow across planning, generation, healing, and governance.

#### Wave 1 — Ready Locally

| Type | Article | Keyword |
| --- | --- | --- |
| **Pillar** | [Playwright Test Agents Complete Guide: Planner, Generator, and Healer](https://qaskills.sh/blog/playwright-test-agents-planner-generator-healer) | `playwright test agents` |
| Child | [npx playwright init-agents Setup Guide for Agentic Test Loops](https://qaskills.sh/blog/playwright-init-agents-guide) | `playwright init agents` |
| Child | [Playwright Planner Agent Guide for High-Coverage Markdown Test Plans](https://qaskills.sh/blog/playwright-planner-agent-test-plan-guide-2026) | `playwright planner agent` |
| Child | [Playwright Generator Agent Guide for Maintainable Test Code](https://qaskills.sh/blog/playwright-generator-agent-test-code-guide-2026) | `playwright generator agent` |
| Child | [Playwright Healer Agent Guide for Repairing Failed Browser Tests](https://qaskills.sh/blog/playwright-healer-agent-self-healing-tests) | `playwright healer agent` |

#### Wave 2 — Backlog

| Article | Keyword |
| --- | --- |
| Playwright Test Agents with VS Code Agent Loops: Setup and Workflow | `playwright agents vscode` |
| Playwright Test Agents with Claude Code: Planner to Healer Workflow | `playwright agents claude code` |
| Playwright Test Agents with OpenCode: Complete Loop Configuration | `playwright agents opencode` |
| Trace-Driven Playwright Test Repair for Coding Agents | `playwright agent trace repair` |
| How to Review AI-Generated Playwright Tests Before Merge | `review ai generated playwright tests` |

---

### Cluster 5: AI-Powered Test Automation

> QA teams applying AI to traditional software testing workflows. Separates AI4Testing (using AI to improve QA) from Testing AI (evaluating AI products).

#### Wave 1 — Ready Locally

| Type | Article | Keyword |
| --- | --- | --- |
| **Pillar** | [AI Test Automation Tools and Workflows for QA Teams in 2026](https://qaskills.sh/blog/ai-test-automation-tools-2026) | `ai test automation tools` |
| Child | [ISTQB CT-AI v2.0 Guide for QA Engineers: What Changed in 2026](https://qaskills.sh/blog/istqb-ct-ai-v2-guide-2026) | `istqb ct-ai v2` |
| Child | [AI4Testing vs Testing AI: Two Different QA Strategies Explained](https://qaskills.sh/blog/ai4testing-vs-testing-ai-guide-2026) | `ai4testing vs testing ai` |
| Child | [How to Test AI-Generated Code: A Practical SDET Review Playbook](https://qaskills.sh/blog/testing-ai-generated-code-sdet-playbook) | `testing ai generated code` |
| Child | [Self-Healing Test Automation Governance for Reliable QA Suites](https://qaskills.sh/blog/self-healing-test-automation-guide) | `self healing test automation` |

#### Wave 2 — Backlog

| Article | Keyword |
| --- | --- |
| How to Test Probabilistic AI Systems with Non-Deterministic Outputs | `testing probabilistic ai systems` |
| Metamorphic Testing Examples for Machine Learning and LLM Systems | `metamorphic testing ai examples` |
| How to Test Data Drift and Model Drift in Production AI Systems | `data drift model drift testing` |
| Label Correctness Testing for ML Training and Evaluation Datasets | `label correctness testing` |
| Validate AI-Generated Test Cases Before Adding Them to Regression | `validate ai generated test cases` |

---

### Cluster 6: LLM and AI Agent Testing

> Engineers validating LLM applications, chatbots, and tool-using agents. Covers eval harnesses, judges, CI gates, agent behavior, non-determinism, and multi-turn quality.

#### Wave 1 — Ready Locally

| Type | Article | Keyword |
| --- | --- | --- |
| **Pillar** | [LLM Testing Complete Guide: Evals, Agents, RAG, and Quality Gates](https://qaskills.sh/blog/testing-llm-applications-guide) | `llm testing` |
| Child | [OpenAI Evals Platform Shutdown: Migration Checklist for November 2026](https://qaskills.sh/blog/openai-evals-platform-shutdown-migration-2026) | `openai evals shutdown migration` |
| Child | [How to Build an LLM Eval Harness That Matches Production Behavior](https://qaskills.sh/blog/llm-eval-harness-production-guide-2026) | `llm eval harness` |
| Child | [Deterministic Graders vs LLM Judges vs Human Review](https://qaskills.sh/blog/deterministic-graders-vs-llm-judge-human-review-2026) | `deterministic graders vs llm judge` |
| Child | [AI Agent Evaluation Guide for Tools, Trajectories, and Task Success](https://qaskills.sh/blog/ai-agent-eval-testing-guide) | `ai agent evaluation` |

#### Wave 2 — Backlog

| Article | Keyword |
| --- | --- |
| Capability Evals vs Regression Evals: When a Benchmark Should Graduate | `capability evals vs regression evals` |
| pass@k vs pass^k for Agent Reliability: Formula and Use Cases | `pass@k vs pass^k` |
| How to Calibrate an LLM Judge Against Expert Labels | `llm judge calibration` |
| Detect Grader Hacking, Reward Hacking, and Evaluation Awareness | `grader hacking llm evaluation` |
| How to Build an LLM Eval Dataset That Matches Production Traffic | `production llm eval dataset` |

---

### Cluster 7: DeepEval LLM Testing

> Python QA engineers adopting pytest-style LLM and agent evaluations. Covers 50+ metrics, tracing, RAG, synthetic data, conversations, and MCP systems.

#### Wave 1 — Ready Locally

| Type | Article | Keyword |
| --- | --- | --- |
| **Pillar** | [DeepEval 4 Tutorial for Pytest-Style LLM, RAG, and Agent Testing](https://qaskills.sh/blog/deepeval-llm-testing-guide) | `deepeval 4 tutorial` |
| Child | [DeepEval 3 to 4 Migration Guide for Traces and Multi-Turn Goldens](https://qaskills.sh/blog/deepeval-3-to-4-migration-guide-2026) | `deepeval 4 migration` |
| Child | [How to Install the DeepEval Skill in Codex, Claude Code, and Cursor](https://qaskills.sh/blog/deepeval-skill-codex-claude-cursor-install-2026) | `deepeval skill install` |
| Child | [DeepEval ConversationSimulator Tutorial with Synthetic Users](https://qaskills.sh/blog/deepeval-conversation-simulator-guide-2026) | `deepeval conversation simulator` |
| Child | [DeepEval TaskCompletionMetric: Trace Setup and Failure Analysis](https://qaskills.sh/blog/deepeval-task-completion-metric-agent) | `deepeval task completion metric` |

#### Wave 2 — Backlog

| Article | Keyword |
| --- | --- |
| DeepEval ToolCorrectnessMetric for Arguments, Outputs, and Order | `deepeval tool correctness metric` |
| Build a DeepEval Simulation Graph with Stopping Controllers | `deepeval simulation graph` |
| Write Multi-Turn Rubrics with DeepEval Conversational G-Eval | `deepeval conversational g eval` |
| Generate Single-Turn and Multi-Turn Goldens with the DeepEval CLI | `deepeval generate goldens cli` |
| Run DeepEval with Pytest in CI/CD and Pull Request Quality Gates | `deepeval pytest ci cd` |

---

### Cluster 8: Promptfoo Evaluation & Red Teaming

> JavaScript and platform teams testing prompts, RAG, agents, and MCP systems. Covers eval matrices, 50+ vulnerability classes, CI gates, and MCP provider security.

#### Wave 1 — Ready Locally

| Type | Article | Keyword |
| --- | --- | --- |
| **Pillar** | [Promptfoo Complete Guide for LLM Evals, RAG, and Red Teaming](https://qaskills.sh/blog/promptfoo-complete-guide-2026) | `promptfoo` |
| Child | [What OpenAI's Promptfoo Acquisition Means for Open-Source LLM Testing](https://qaskills.sh/blog/openai-promptfoo-acquisition-explained-2026) | `openai promptfoo acquisition` |
| Child | [Install Promptfoo Agent Skills in Codex and Claude Code](https://qaskills.sh/blog/promptfoo-agent-skills-codex-claude-install-2026) | `promptfoo agent skills` |
| Child | [Test and Red-Team an MCP Server with Promptfoo's MCP Provider](https://qaskills.sh/blog/promptfoo-mcp-provider-security-testing-2026) | `promptfoo mcp provider` |
| Child | [Evaluate Codex vs Claude Coding Agents with Promptfoo](https://qaskills.sh/blog/promptfoo-evaluate-codex-vs-claude-agents-2026) | `promptfoo coding agent evaluation` |

#### Wave 2 — Backlog

| Article | Keyword |
| --- | --- |
| Run Promptfoo as an MCP Server for Agent-Driven Evals | `promptfoo mcp server` |
| Promptfoo CI Gates with GitHub Actions, JUnit XML, and Run Tags | `promptfoo github actions ci` |
| Promptfoo Deterministic Assertions vs llm-rubric Graders | `promptfoo assertions vs llm rubric` |
| Poison RAG Documents with promptfoo redteam for Security Testing | `promptfoo rag document poisoning` |
| Debug Promptfoo Target Authentication, Timeouts, and Input Mappings | `promptfoo provider debugging` |

---

### Cluster 9: RAG Testing and Evaluation

> QA and ML engineers validating retrieval-augmented generation systems. Covers retrieval, generation, synthetic datasets, security, chunking, reranking, citation, and abstention.

#### Wave 1 — Ready Locally

| Type | Article | Keyword |
| --- | --- | --- |
| **Pillar** | [RAG QA Testing Guide for Retrieval, Generation, and Citation Quality](https://qaskills.sh/blog/rag-evaluation-metrics-complete-2026) | `rag testing` |
| Child | [How to Tell Whether a RAG Failure Comes from Retrieval or Generation](https://qaskills.sh/blog/rag-retrieval-vs-generation-failure-diagnosis-2026) | `rag retrieval vs generation failure` |
| Child | [Contextual Precision vs Recall vs Relevancy for RAG Testing](https://qaskills.sh/blog/rag-context-precision-recall-guide-2026) | `rag context precision recall relevancy` |
| Child | [High Answer Relevance but Low Faithfulness: Diagnose Wrong RAG Answers](https://qaskills.sh/blog/rag-high-relevance-low-faithfulness-diagnosis-2026) | `high relevance low faithfulness rag` |
| Child | [Generate Synthetic RAG Testsets with Ragas and Your Documents](https://qaskills.sh/blog/rag-synthetic-testset-generation-ragas-guide-2026) | `rag synthetic testset generation` |

#### Wave 2 — Backlog

| Article | Keyword |
| --- | --- |
| Source-Aware Context Precision for Retrieved Documents and Chunks | `source aware context precision rag` |
| Compare Vector Databases with One Fixed RAG Evaluation Dataset | `compare vector databases rag evaluation` |
| Test RAG No-Answer and Abstention Behavior When Context Is Missing | `rag no answer abstention testing` |
| Cross-Lingual RAG Evaluation for Multilingual Queries and Documents | `cross lingual rag evaluation` |
| Multi-Turn RAG Evaluation for Conversational Assistants | `multi turn rag evaluation` |

---

### Cluster 10: MCP Server Testing & Security

> QA, platform, and security engineers shipping Model Context Protocol servers. Covers protocol conformance, Inspector, contract testing, OAuth, SSRF, and session security.

#### Wave 1 — Ready Locally

| Type | Article | Keyword |
| --- | --- | --- |
| **Pillar** | [MCP Server Testing Complete Guide for Protocol, Tools, and Security](https://qaskills.sh/blog/mcp-server-testing-guide-2026) | `mcp server testing` |
| Child | [Run the Official MCP Conformance Suite Against Your Server](https://qaskills.sh/blog/mcp-official-conformance-suite-server-guide-2026) | `mcp conformance suite server` |
| Child | [Add MCP Conformance Tests to GitHub Actions with Failure Baselines](https://qaskills.sh/blog/mcp-conformance-github-actions-baseline-2026) | `mcp conformance github actions` |
| Child | [Use MCP Inspector CLI to Automate tools/list and tools/call Tests](https://qaskills.sh/blog/mcp-inspector-tutorial-2026) | `mcp inspector cli testing` |
| Child | [Test MCP Tool Schemas, Defaults, Invalid Inputs, and Error Types](https://qaskills.sh/blog/mcp-server-contract-testing-guide) | `mcp tool schema contract testing` |

#### Wave 2 — Backlog

| Article | Keyword |
| --- | --- |
| Test an MCP Client with Authorization and Metadata Conformance | `mcp client auth conformance testing` |
| How to Test MCP stdio vs Streamable HTTP Transports | `mcp stdio vs streamable http testing` |
| MCP OAuth Tests for Confused Deputy and Token Passthrough Attacks | `mcp oauth security testing` |
| MCP SSRF Test Cases for Metadata Discovery and Redirect Chains | `mcp ssrf testing` |
| MCP Session Hijacking Tests for Stateful and Resumable Streams | `mcp session hijacking testing` |

---

## Playwright Quiz & Practice Questions

> **Source:** [VSkills — Playwright Practice Questions](https://www.vskills.in/practice/playwright-practice-questions)

Unlike the hands-on demo sites above, this is a **quiz-based** resource for testing your *knowledge* of Playwright concepts — not for practicing automation itself. Answer multiple-choice questions across dozens of topic-specific tests:

| Test Category | URL |
| --- | --- |
| Playwright Mock Test | [Take test](https://www.vskills.in/practice/playwright-mock-test-practice-questions) |
| Playwright Basics | [Take test](https://www.vskills.in/practice/playwright-basics-practice-questions) |
| Playwright Actions | [Take test](https://www.vskills.in/practice/playwright-actions-practice-questions) |
| Playwright Locators | [Take test](https://www.vskills.in/practice/playwright-locators-practice-questions) |
| Locating with CSS Selectors | [Take test](https://www.vskills.in/practice/locating-in-playwright-with-css-selectors-practice-questions) |
| Web-First Assertions | [Take test](https://www.vskills.in/practice/playwright-web-first-assertions-practice-questions) |
| Playwright Fixtures | [Take test](https://www.vskills.in/practice/playwright-fixtures-practice-questions) |
| Playwright Events | [Take test](https://www.vskills.in/practice/playwright-events-practice-questions) |
| Intercept Requests | [Take test](https://www.vskills.in/practice/playwright-intercept-requests-practice-questions) |
| Network Events | [Take test](https://www.vskills.in/practice/playwright-network-events-practice-questions) |
| API Testing | [Take test](https://www.vskills.in/practice/playwright-api-testing-practice-questions) |
| Authentication | [Take test](https://www.vskills.in/practice/playwright-authentication-practice-questions) |
| Page Object Model (POM) | [Take test](https://www.vskills.in/practice/playwright-page-object-model-pom-practice-questions) |
| Data-Driven Testing | [Take test](https://www.vskills.in/practice/playwright-data-driven-testing-practice-questions) |
| Behavior-Driven Development | [Take test](https://www.vskills.in/practice/playwright-behavior-driven-development-practice-questions) |
| Run Tests in Parallel | [Take test](https://www.vskills.in/practice/run-tests-in-parallel-in-playwright-practice-questions) |
| Pytest and Playwright | [Take test](https://www.vskills.in/practice/pytest-and-playwright-practice-questions) |
| Pytest Fixtures and Playwright | [Take test](https://www.vskills.in/practice/pytest-fixture-and-playwright-practice-questions) |
| Async Playwright | [Take test](https://www.vskills.in/practice/asynchronous-playwright-practice-questions) |
| Playwright Tools | [Take test](https://www.vskills.in/practice/playwright-tools-practice-questions) |

---

## TestDino — Playwright Cloud Companion

> **URL:** [testdino.com](https://testdino.com)

TestDino is a **Playwright cloud companion**. It records CI runs, detects flaky tests, and keeps traces and fix workflows ready for teams and AI agents over MCP — a production-grade reporting/analytics tool rather than a practice site.

| Core Capability | What It Does |
| --- | --- |
| **Flake detection** | Ranks flaky tests with stability percentages and root-cause categories (timing, environment, network, assertion) |
| **AI agent context (MCP)** | Lets Claude, Cursor, and Copilot query live test results for AI-assisted debugging |
| **1-Click trace viewer** | Debug failures with screenshots, video, and visual diffs |
| **Analytics & trends** | Suite health, run timing, per-test trends, error categorization, coverage, and environment pass rates |
| **CI/CD & PR gates** | Pass-rate and flaky thresholds block bad merges; posts status checks on GitHub/GitLab |
| **Integrations** | Jira, Slack, GitHub, Linear, Azure DevOps, Asana, and monday.com |

### Quick Start

```bash
npm install @testdino/playwright
```

```typescript
reporter: [
  ['@testdino/playwright', { token: process.env.TESTDINO_TOKEN }],
],
```

---

## More Reading

| Resource | Description |
| --- | --- |
| [Awesome Sites to Test On](https://github.com/the-internet/the-internet) | Butch Mayhew's list of sites categorized by security, mobile, performance, and web |
| [Automation Panda](https://automationpanda.com/2021/10/18/best-websites-to-practice-test-automation/) | Recommended sites by Andrew Knight |
| [QASkills.sh Roadmaps](https://qaskills.sh/roadmaps) | Structured learning paths for Playwright, AI testing, RAG, and MCP |
| [VSkills Playwright Practice Questions](https://www.vskills.in/practice/playwright-practice-questions) | MCQ quizzes covering Playwright concepts and best practices |
| [TestDino](https://testdino.com) | Cloud companion that records CI runs, detects flakes, and exposes traces/AI workflows over MCP |
