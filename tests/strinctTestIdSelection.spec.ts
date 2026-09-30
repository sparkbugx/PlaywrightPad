import { test, expect } from '@playwright/test';

test('strict test id selection (TypeScript)', async ({ page }) => {
    // Step 1: Navigate to 'https://playwrightpad.com/practice/test-ids/'.
    await page.goto('https://playwrightpad.com/practice/test-ids/')
    // Step 2: Locate cards container: page.getByTestId('profile-card-john').
    await page.getByTestId('profile-card-john').waitFor()
    // Step 3: Assert visibility.
    await expect(page.getByTestId('profile-card-john')).toBeVisible()
});
