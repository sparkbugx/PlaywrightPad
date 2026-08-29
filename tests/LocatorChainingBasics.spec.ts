import { test, expect } from '@playwright/test';

test('locator chaining basics (TypeScript)', async ({ page }) => {
    // Step 1: Navigate to 'https://playwrightpad.com/practice/filters-chaining/'.
    // TODO: Write your code here
    await page.goto('https://playwrightpad.com/practice/filters-chaining/')
    // Step 2: Locate container: const wrapper = page.locator('#stats-card').
    // TODO: Write your code here

    // Step 3: Locate child title: wrapper.getByRole('heading').
    // TODO: Write your code here
    
    // Step 4: Assert visibility.
    // TODO: Write your code here

});
