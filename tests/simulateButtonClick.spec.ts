import { test, expect } from '@playwright/test';

test('simulate button click (TypeScript)', async ({ page }) => {
    // Step 1: Navigate to 'https://playwrightpad.com/practice/click-actions/'.
    // TODO: Write your code here
    await page.goto('https://playwrightpad.com/practice/click-actions/')

    // Step 2: Locate the button with the accessibility name 'Click Me'.
    // TODO: Write your code here
    const button = page.getByRole('button', {name: 'Click Me', exact: true });
    // Step 3: Click the button.
    // TODO: Write your code here
    await button.click();
    await expect(page.locator('#click-status')).toHaveText('Single click detected!')
});
