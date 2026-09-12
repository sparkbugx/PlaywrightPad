import {test, expect} from "@playwright/test";
import * as dotenv from 'dotenv';
import * as path from 'path';


dotenv.config({path: path.resolve(__dirname, '..', '.env')});
//variables
const userName = process.env.TEST_USER;
const passwordUser = process.env.TEST_PASSWORD;
const TestUrl = process.env.TEST_URL;



test.beforeEach('Secure Bank', async ({page}) => {
    await page.goto(TestUrl);
    await page.getByRole('textbox', {name:'username'}).fill(userName);
    await page.getByRole('textbox', {name:'password'}).fill(passwordUser);
    await page.getByRole('button', {name: 'Sign In'}).click()


})

test('Verify Dashboard Load', async ({page})=> {
    await expect(page).toHaveURL(/bank\/dashboard/);
    await expect(page.getByTestId('dashboard-welcome-message')).toBeVisible();

})

test('Verify Total Balance  Display', async ({page}) =>{
    //Declarate the variable Total net worth located in the Dashboard
    const totalNetWorthText = await page.locator('[data-testid="stat-card-net-worth-value"]').textContent();

    //We Start with the Total Balance Widget
    await page.getByTestId('sidebar-link-accounts').click();
    //wait for the account rows to load before we start counting
    await page.locator('[data-testid="account-row"]').first().waitFor();

    async function getAllAccounts(){
        const rows: any = page.locator('[data-testid="account-row"]');
        const count : any = await rows.count();
        const accounts: any = [];

        for (let i = 0; i< count; i++) {
             const row = rows.nth(i);
             accounts.push({
                 name: await row.locator('[data-testid="account-row-name"]').textContent(),
                 balance: await row.locator('[data-testid="account-row-balance"]').textContent(),
             });
        }
        return accounts;
    }
    const accountsData = await getAllAccounts();

    const calculatedTotalSum  = accountsData. reduce((sum: any, account:any) => {
        const amount = parseFloat (account.balance?.replace(/[$,]/g, "") || '0');
        return sum + amount;
    },0);

    const compareTotalSum = parseFloat(totalNetWorthText?.replace(/[$,]/g, "") || '0');

    expect(compareTotalSum).toBe(calculatedTotalSum);
    console.log(`The total sum of all accounts is: ${calculatedTotalSum}`)

});

test ("Verify Recent Transactions Widget", async ({page}) => {
    await page.getByTestId('sidebar-link-transfer').click();
    await expect(page).toHaveURL(/bank\/transactions/);

    const rows = page.getByTestId('allop-txn-row');

    const count = await rows.count();
    console.log(`Number of transactions present: ${count}`);

    for(let i = 0; i< count; i ++){
        const row = rows.nth(i);
        await expect(row.getByTestId('all-txn-date')).toBeVisible();
        await expect(row.locator('td').nth(1)).toBeVisible();
        await expect(row.getByTestId('all-txn-description')).toBeVisible();
        await expect(row.getByTestId('all-txn-category-badge')).toBeVisible();

        const amount = row.getByTestId('all-txn-amount');
        await expect(amount).toBeVisible();
        await expect(amount).toHaveAttribute("data-amount", /.+/);
    }
})


