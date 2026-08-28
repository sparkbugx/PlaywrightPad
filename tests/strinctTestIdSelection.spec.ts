import { test, expect } from '@playwright/test';

test('strict test id selection (TypeScript)', async ({ page }) => {
    // Step 1: Navigate to 'https://playwrightpad.com/practice/test-ids/'.
    // TODO: Write your code here
    await page.goto('https://www3.anikai.cc/home')
    // Step 2: Locate cards container: page.getByTestId('profile-card-john').
    // TODO: Write your code here
    await page.locator('#search').evaluate(el => el.setAttribute('data-testid', 'search'))
    // Step 3: Assert visibility.
    // TODO: Write your code here
    const SearchidMain = page.getByTestId('search')
    await expect(SearchidMain).toBeVisible()
});
