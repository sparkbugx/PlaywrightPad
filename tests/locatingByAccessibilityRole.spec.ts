import { test, expect } from '@playwright/test';

test('Locating by accessibility role TypeScript', async ({page}) => {
    await page.goto('https://playwrightpad.com/practice/role-locators/')

    const button1 = await page.getByRole('button', { name: 'Submit Form'});
    await button1.click();
})