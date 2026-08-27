import { test, expect } from '@playwright/test';

test('locating by title attribute (TypeScript)', async ({ page }) => {
    // Step 1: Navigate to 'https://playwrightpad.com/practice/role-locators/'.
    // TODO: Write your code here
    await page.goto('https://www3.anikai.cc/home')
    // Step 2: Locate warning icon: page.getByTitle('System Alert Details').
    // TODO: Write your code here
    const Tooltip = page.getByRole('banner').getByTitle('Drama');
    // Step 3: Assert visibility.
    // TODO: Write your code here
    await expect(Tooltip).toHaveText('Drama');

});
