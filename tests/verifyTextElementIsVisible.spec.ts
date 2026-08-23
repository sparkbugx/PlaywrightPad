import {test, expect} from "@playwright/test";
 test('Verify text Elements visibility', async ({page}) => {
   await page.goto ('https://playwrightpad.com/practice/basic-navigation/');
   const status  = await page.locator('.nav-status');
   await expect(status).toBeVisible();

});