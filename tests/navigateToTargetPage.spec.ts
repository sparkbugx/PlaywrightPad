import { test, expect } from '@playwright/test';

// Step 1: Declare a test block using test().
// Step 2: Inject the page fixture in the callback.
// Step 3: Navigate to the path 'https://playwrightpad.com/practice/basic-navigation/' using page.goto().
//
// TODO: Write your test case below:

test('Initia page', async  ({ page }) => {
    await page.goto('https://playwrightpad.com/practice/basic-navigation')

});