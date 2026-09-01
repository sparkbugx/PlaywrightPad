import { test, expect } from '@playwright/test';

test('locator chaining basics (TypeScript)', async ({ page }) => {
    // Step 1: Navigate to 'https://playwrightpad.com/practice/filters-chaining/'.
    // TODO: Write your code here
    await page.goto('https://qaplayground.com/bank/login')
    // Step 2: Locate container: const wrapper = page.locator('#stats-card').
    // TODO: Write your code here
    const wrapper = page.getByText('Test credentials')
    // Step 3: Locate child title: wrapper.getByRole('heading').
    // TODO: Write your code here
    await expect(wrapper).toBeVisible()
    const user = ('standard_user');
    const password = ('bank_sauce');
    await page.getByTestId('login-username-input').fill(user)
    await page.getByTestId('login-password-input').fill(password)
    await page.getByRole('button', {name:"Sign in"}).click()

    // Step 4: Assert visibility.
    // TODO: Write your code here
    const nav = page.getByTestId('sidebar-main-nav');
    await nav.getByTestId('sidebar-link-transfer').click();
    await nav.getByRole('link', {name: 'Transfer'}).click();
});


//Chaining basics needs to be improves and i need to make sure to find first the correct element
// for testing
//https://qaplayground.com/bank/dashboard
  //  https://playwrightpad.com/workspace/locator-mastery/loc-mas-010