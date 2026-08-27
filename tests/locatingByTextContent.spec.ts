import { test, expect } from '@playwright/test';

test('locating by text content (TypeScript)', async ({ page }) => {
    // Step 1: Navigate to 'https://playwrightpad.com/practice/role-locators/'.
    // TODO: Write your code here
    await page.goto('https://playwrightpad.com/practice/role-locators/')
    // Step 2: Locate text block: page.getByText('Welcome to Playwright Lab').
    // TODO: Write your code here
    const welcomeLocator =  page.getByText('Welcome to Playwright Lab')
    // Step 2: Locate text block: page.getByText('Welcome to Playwright Lab').
    // TODO: Write your code here
    expect(welcomeLocator).toBeVisible
});
