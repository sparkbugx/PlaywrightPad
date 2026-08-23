import {test, expect } from '@playwright/test'

test('verify page title (TypeScript)', async ({page}) => {
    await page.goto('https://playwrightpad.com/practice/basic-navigation/');
    await expect(page).toHaveTitle("Practice: Basic Navigation")
})