import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.resolve(__dirname, '..', '.env')});
const user : any = process.env.TEST_USER;
const password : any = process.env.TEST_PASSWORD;
const TestUrl:any  = process.env.TEST_URL;

test('filtering list items hastext (TypeScript)', async ({ page }) => {
    // Step 1: Navigate to 'https://playwrightpad.com/practice/filters-chaining/'.
    // TODO: Write your code here
    await page.goto(TestUrl);
    await page.getByRole('textbox', {name:"username"}).fill(user);
    await page.getByRole('textbox', {name:'password'}).fill(password);
    await page.getByRole('button', {name: 'Sign In'}).click();
    await page.waitForURL('**/bank/dashboard');
    await expect(page).toHaveURL(/bank\/dashboard/);
    await page.locator('[data-nav="transfer"]').click();
    await expect(page).toHaveURL(/bank\/transfer/);
    await page.locator('[aria-haspopup="listbox"]').first().click();
    await page.getByRole('option', { name: /Everyday Checking/ }).click();
    //await page.locator('[role="combobox"]').first().click();


    // Step 2: Filter list items: page.locator('li.stat-item').filter({ hasText: 'Active Users' }).
    // TODO: Write your code here

    // Step 3: Assert item count.
    // TODO: Write your code here

});



//https://github.com/s1dashu/ip-as-logo-skill