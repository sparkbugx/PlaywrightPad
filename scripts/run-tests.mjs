import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

// Runs `npx playwright test <args>` then re-applies our light-mode + professional
// theme to the freshly generated HTML report. The report is only written to disk
// after the run finishes, so patching must happen AFTER the test command exits.

const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const args = ['playwright', 'test', ...process.argv.slice(2)];

const result = spawnSync(npx, args, { stdio: 'inherit', shell: process.platform === 'win32' });

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

// Patch the report after the run has fully finished (report is on disk now).
import('./patch-report.mjs')
  .then(({ default: patch }) => {
    patch();
    process.exit(result.status ?? 1);
  })
  .catch(err => {
    console.error('Failed to patch report:', err);
    process.exit(result.status ?? 1);
  });
