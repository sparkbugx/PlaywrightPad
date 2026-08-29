import { test, expect } from '@playwright/test';

test('xpath selector targeting (TypeScript)', async ({ page }) => {
    // Step 1: Navigate to 'https://practicetestautomation.com/practice-test-login/'.
    // TODO: Write your code here
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    // Step 2: Locate dynamic text node: page.locator('//button[contains(text(),"Submit")]').
    // TODO: Write your code here
    const usernameOne = "Albert";
    const submitButton = page.locator('//*[@id="submit"]');
    // Step 3: Click node.
    // TODO: Write your code here
    await page.locator('//*[@id="username"]').fill(usernameOne);
    await (submitButton).click();
});