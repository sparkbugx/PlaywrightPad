import { test, expect } from '@playwright/test';

test('locating by text label (TypeScript)', async ({ page }) => {
    // Step 1: Navigate to 'https://playwrightpad.com/practice/text-inputs/'.
    // TODO: Write your code here
    await page.goto('https://playwrightpad.com/practice/text-inputs/');
    // Step 2: Locate field by label text: page.getByLabel('User Label').
    // TODO: Write your code here
    const usernameInputLabel = page.getByLabel('username');
    // Step 3: Fill email credentials.
    // TODO: Write your code here
    await usernameInputLabel.fill('Hello');
});
