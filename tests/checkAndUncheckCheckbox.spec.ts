import {test, expect} from "@playwright/test";

test('Check and Uncheck checkbo TypeScript', async ({ page }) =>
    {
        await page.goto('https://playwrightpad.com/practice/checkbox-radio/')
        await page.getByLabel('Enable Anonymous Telemetry').check()
        await expect(page.getByLabel('Enable Anonymous Telemetry')).toBeChecked();
    });