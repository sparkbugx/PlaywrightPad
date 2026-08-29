import { test, expect } from '@playwright/test';

test('css selector targeting (TypeScript)', async ({ page }) => {
    // Step 1: Navigate to 'https://playwrightpad.com/practice/css-xpath/'.
    await page.goto('https://playwrightpad.com/practice/css-xpath/');
    // Step 2: Locate primary alert box: page.locator('.alert-box-warning').
    // TODO: Write your code here
    const card = page.locator('div.card');
    const target = card.locator('.element-box[data-custom-attr="special-target-x"]');
    // Step 3: Assert visibility.
    // TODO: Write your code here
    await expect(card).toBeVisible();
    await expect(target).toBeVisible();
});
