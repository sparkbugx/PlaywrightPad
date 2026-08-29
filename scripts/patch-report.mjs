import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const reportPath = join(root, 'playwright-report', 'index.html');

const MARK = 'data-report-theme=light';

function patch() {
  if (!existsSync(reportPath)) {
    console.warn('Report not found; skipping theme patch:', reportPath);
    return;
  }

  let html = readFileSync(reportPath, 'utf8');

  if (html.includes(MARK)) {
    console.log('Report already themed (light mode).');
    return;
  }

  html = html.replace(
    `<html style='scrollbar-gutter: stable both-edges;'>`,
    `<html lang='en' class='light-mode' data-report-theme=light style='scrollbar-gutter: stable both-edges;'>`
  );

  const INJECT = `/*$vite$:1*/</style>
  <script data-report-theme=light>
    (function () {
      try { localStorage.setItem('theme', 'light-mode'); } catch (e) {}
      var d = document.documentElement;
      d.classList.remove('dark-mode');
      d.classList.add('light-mode');
    })();
  </script>
  <style data-report-theme=light>
    :root, :root.light-mode {
      color-scheme: light;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }
    :root.dark-mode { color-scheme: dark; }
    html { scroll-behavior: smooth; }
    body { background: var(--color-canvas-default, #f6f8fa); }
    ::selection { background: #bfdbfe; color: #1e3a8a; }
    ::-webkit-scrollbar { width: 12px; height: 12px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #c3ccd8; border-radius: 6px; border: 3px solid transparent; background-clip: content-box; }
    ::-webkit-scrollbar-thumb:hover { background: #9aa7b8; border: 3px solid transparent; background-clip: content-box; }
    .header-view .header-title { font-weight: 700; letter-spacing: -0.02em; }
    .header-view .header-superheader { letter-spacing: 0.01em; }
    .test-case-column { box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06); }
    .chip-header, .chip-body { box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04); }
    .tree-item-title:hover, .test-file-test:hover { background-color: var(--color-canvas-subtle, #f1f5f9); }
    .test-file-test { border-radius: 6px; }
    .test-file { padding: 2px 6px; }
    a, .subnav-item, .tabbed-pane-tab-element, .expandable-summary { transition: color 150ms ease, background-color 150ms ease, border-color 150ms ease; }
  </style>
  </head>`;

  if (html.includes(`/*$vite$:1*/</style>\n  </head>`)) {
    html = html.replace(`/*$vite$:1*/</style>\n  </head>`, INJECT);
  } else {
    console.error('Could not locate style/head marker; report NOT patched.');
    process.exitCode = 1;
    return;
  }

  writeFileSync(reportPath, html, 'utf8');
  console.log('Report patched: forced light mode + professional styling.');
}

// Exported function used by Playwright's globalTeardown.
export default function globalTeardown() {
  patch();
}

// Support direct invocation: `node scripts/patch-report.mjs`
const invokedDirectly = process.argv[1] === fileURLToPath(import.meta.url);
if (invokedDirectly) patch();
