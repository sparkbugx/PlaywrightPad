import { test, expect } from '@playwright/test'

test("Verify page url (TypeScript)", async ({ page })=> {
    await page.goto('https://playwrightpad.com/practice/url-assertions/')
    await expect(page).toHaveURL("https://playwrightpad.com/practice/url-assertions/")
});