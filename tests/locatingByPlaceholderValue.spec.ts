import { test, expect } from '@playwright/test';

test('locating by placeholder value (TypeScript)', async ({ page }) => {
    // Step 1: Navigate to 'https://playwrightpad.com/practice/text-inputs/'.
    // TODO: Write your code here
    await page.goto('https://playwrightpad.com/practice/text-inputs/')
    // Step 2: Locate input: page.getByPlaceholder('Enter username').
    // TODO: Write your code here
    const usernameInput =  page.getByPlaceholder('e.g. playwright_master');
    // Step 3: Fill credentials.
    // TODO: Write your code here
    await usernameInput.fill('qa-admin');

});
