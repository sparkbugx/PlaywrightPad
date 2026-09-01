import * as dotenv from 'dotenv';
import * as path from 'path';
import { test, expect } from '@playwright/test';

dotenv.config({path: path.resolve(__dirname, '..', '.env')});

const userName : any = process.env.TEST_USER;
const passwordUser : any = process.env.TEST_PASSWORD;
const TestUrl: any = process.env.TEST_URL;

test('filtering list items haslocator (TypeScript)', async ({ page }) => {
  // Step 1: Navigate to 'https://playwrightpad.com/practice/filters-chaining/'.
  // TODO: Write your code here
  await page.goto(TestUrl);
  await expect(page).toHaveURL(/bank\/login/);
  await page.getByTestId('login-username-input').fill(userName)
  await page.getByTestId('login-password-input').fill(passwordUser)
  await page.getByRole('button', {name: 'Sign In'}).click()
  await page.waitForURL(/bank\/dashboard/);

  // Step 2: Filter elements: page.locator('li.stat-item').filter({ has: page.locator('button.btn-action') }).
  // TODO: Write your code here
 // const filteredItems = page.locator('li.stat-item').filter({ has: page.locator('button.btn-action') });

  // Step 3: Assert visibility.
  // TODO: Write your code here

});
