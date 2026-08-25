import { test, expect } from '@playwright/test';

test('select dropdown option (TypeScript)', async ({ page }) => {
    // Step 1: Navigate to 'https://playwrightpad.com/practice/select-dropdown/'.
    // TODO: Write your code here
    await page.goto ('https://playwrightpad.com/practice/select-dropdown/');
    // Step 2: Locate the select dropdown element.
    // TODO: Write your code here
    const themeSelect = page.getByLabel('Visual Theme');
    await themeSelect.selectOption('dark');
    // Step 3: Select the option value 'intermediate'.
    // TODO: Write your code here
    await expect(themeSelect).toHaveValue('dark');

});
