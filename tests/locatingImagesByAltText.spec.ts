import { test, expect } from '@playwright/test';

test('locating images by alt text (TypeScript)', async ({ page }) => {
    // Step 1: Navigate to 'https://playwrightpad.com/practice/role-locators/'.
    // TODO: Write your code here
    await page.goto('https://www3.anikai.cc/home');
    // Step 2: Locate logo: page.getByAltText('Playwright Logo').
    // TODO: Write your code here
    await expect(page.getByAltText('Thunder 3')).toBeVisible();

    // Step 3: Assert visibility.
    // TODO: Write your code here

});
