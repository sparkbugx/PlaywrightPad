import { test, expect } from '@playwright/test';

test('fill out form text input (TypeScript)', async ({ page }) => {
    // Step 1: Navigate to 'https://playwrightpad.com/practice/fill-actions/'.
    // TODO: Write your code here
    await page.goto('https://playwrightpad.com/practice/fill-actions/');
    // Step 2: Locate the text input field.
    // TODO: Write your code here
    await page.locator('input').fill('Playwright')

    // Step 3: Fill the input with the message 'Playwright'.
    // TODO: Write your code here
    await expect(page.locator('input')).toHaveValue('Playwright')
});
