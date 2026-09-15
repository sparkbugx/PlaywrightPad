# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SecureBanck.spec.ts >> Verify Recent Transactions Widget
- Location: tests/SecureBanck.spec.ts:66:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('allop-txn-row').first() to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - main [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "SecureBank" [ref=e6] [cursor=pointer]:
          - /url: /bank/dashboard
        - generic [ref=e13]:
          - button "Switch to dark mode" [ref=e14] [cursor=pointer]
          - link "Notifications — 2 unread" [ref=e18] [cursor=pointer]:
            - /url: /bank/notifications
            - generic [ref=e22]: "2"
          - button "Logout" [ref=e23]
      - generic [ref=e25]:
        - navigation "Main navigation" [ref=e27]:
          - generic [ref=e28]:
            - paragraph [ref=e29]: Main
            - navigation [ref=e30]:
              - link "Dashboard" [ref=e31] [cursor=pointer]:
                - /url: /bank/dashboard
              - link "Accounts" [ref=e38] [cursor=pointer]:
                - /url: /bank/accounts
              - link "Transfer" [ref=e42] [cursor=pointer]:
                - /url: /bank/transfer
              - link "Send Money" [ref=e47] [cursor=pointer]:
                - /url: /bank/send-money
              - link "Bill Pay" [ref=e52] [cursor=pointer]:
                - /url: /bank/bill-pay
              - link "Transactions" [ref=e57] [cursor=pointer]:
                - /url: /bank/transactions
              - link "Apply Loan" [ref=e63] [cursor=pointer]:
                - /url: /bank/apply-loan
            - separator [ref=e67]
            - paragraph [ref=e68]: Account
            - navigation [ref=e69]:
              - link "Notifications 2 unread notifications" [ref=e70] [cursor=pointer]:
                - /url: /bank/notifications
                - generic [ref=e74]: Notifications
                - generic "2 unread notifications" [ref=e75]: "2"
              - link "Profile" [ref=e76] [cursor=pointer]:
                - /url: /bank/profile
              - link "Test Cases" [ref=e81] [cursor=pointer]:
                - /url: /bank/test-cases
          - separator [ref=e86]
          - generic [ref=e87]:
            - generic [ref=e88]: ST
            - generic [ref=e89]: standard_user
        - main [ref=e90]:
          - generic [ref=e91]:
            - generic [ref=e92]:
              - heading "Welcome back, Alex" [level=1] [ref=e93]
              - paragraph [ref=e94]: Here's your financial overview.
            - generic [ref=e95]:
              - generic [ref=e96]:
                - paragraph [ref=e102]: Total Net Worth
                - paragraph [ref=e103]: $17,050.00
                - paragraph [ref=e104]: Across 2 accounts
              - generic [ref=e105]:
                - paragraph [ref=e111]: Net Change
                - paragraph [ref=e112]: +$0.00
                - paragraph [ref=e113]: This month
              - generic [ref=e114]:
                - paragraph [ref=e120]: Income
                - paragraph [ref=e121]: +$0.00
                - paragraph [ref=e122]: This month
              - generic [ref=e123]:
                - paragraph [ref=e129]: Expenses
                - paragraph [ref=e130]: "-$0.00"
                - paragraph [ref=e131]: This month
            - region "Quick actions" [ref=e133]:
              - heading "Quick Actions" [level=2] [ref=e134]
              - generic [ref=e135]:
                - link [ref=e136] [cursor=pointer]:
                  - /url: /bank/transfer
                  - generic [ref=e141]:
                    - paragraph [ref=e142]: Transfer Money
                    - paragraph [ref=e143]: Move funds between your accounts
                - link [ref=e144] [cursor=pointer]:
                  - /url: /bank/send-money
                  - generic [ref=e149]:
                    - paragraph [ref=e150]: Send Money
                    - paragraph [ref=e151]: Pay someone externally
                - link [ref=e152] [cursor=pointer]:
                  - /url: /bank/bill-pay
                  - generic [ref=e157]:
                    - paragraph [ref=e158]: Pay a Bill
                    - paragraph [ref=e159]: Pay utilities and services
                - link [ref=e160] [cursor=pointer]:
                  - /url: /bank/apply-loan
                  - generic [ref=e164]:
                    - paragraph [ref=e165]: Apply for Loan
                    - paragraph [ref=e166]: Personal, auto, home & more
                - link [ref=e167] [cursor=pointer]:
                  - /url: /bank/transactions
                  - generic [ref=e173]:
                    - paragraph [ref=e174]: Transactions
                    - paragraph [ref=e175]: View all account activity
            - separator [ref=e176]
            - region "Recent transactions" [ref=e177]:
              - generic [ref=e178]:
                - heading "Recent Transactions" [level=2] [ref=e179]
                - button "View all" [ref=e180] [cursor=pointer]
              - table "Recent transactions" [ref=e182]:
                - rowgroup [ref=e183]:
                  - row [ref=e184]:
                    - columnheader "Date" [ref=e185]
                    - columnheader "Description" [ref=e186]
                    - columnheader "Category" [ref=e187]
                    - columnheader "Amount" [ref=e188]
                - rowgroup [ref=e189]:
                  - row [ref=e190]:
                    - cell [ref=e191]:
                      - time [ref=e192]: Jun 22, 2026
                    - cell "Direct Deposit — ACME Corp" [ref=e193]
                    - cell "Income" [ref=e194]
                    - cell "Transaction amount $3,200.00" [ref=e196]: +$3,200.00
                  - row [ref=e197]:
                    - cell [ref=e198]:
                      - time [ref=e199]: Jun 21, 2026
                    - cell "Whole Foods Market" [ref=e200]
                    - cell "Groceries" [ref=e201]
                    - cell "Transaction amount -$87.43" [ref=e203]: "-$87.43"
                  - row [ref=e204]:
                    - cell [ref=e205]:
                      - time [ref=e206]: Jun 20, 2026
                    - cell "City Electric Co." [ref=e207]
                    - cell "Utilities" [ref=e208]
                    - cell "Transaction amount -$124.50" [ref=e210]: "-$124.50"
                  - row [ref=e211]:
                    - cell [ref=e212]:
                      - time [ref=e213]: Jun 19, 2026
                    - cell "Amazon.com" [ref=e214]
                    - cell "Shopping" [ref=e215]
                    - cell "Transaction amount -$56.99" [ref=e217]: "-$56.99"
                  - row [ref=e218]:
                    - cell [ref=e219]:
                      - time [ref=e220]: Jun 18, 2026
                    - cell "Uber" [ref=e221]
                    - cell "Transport" [ref=e222]
                    - cell "Transaction amount -$18.75" [ref=e224]: "-$18.75"
  - alert [ref=e225]
  - button "Send feedback or report an issue" [ref=e226] [cursor=pointer]
```

# Test source

```ts
  1   | import {test, expect} from "@playwright/test";
  2   | import * as dotenv from 'dotenv';
  3   | import * as path from 'path';
  4   | 
  5   | 
  6   | dotenv.config({path: path.resolve(__dirname, '..', '.env')});
  7   | //variables
  8   | const userName = process.env.TEST_USER;
  9   | const passwordUser = process.env.TEST_PASSWORD;
  10  | const TestUrl = process.env.TEST_URL;
  11  | 
  12  | 
  13  | 
  14  | test.beforeEach('Secure Bank', async ({page}) => {
  15  |     await page.goto(TestUrl);
  16  |     await page.getByRole('textbox', {name:'username'}).fill(userName);
  17  |     await page.getByRole('textbox', {name:'password'}).fill(passwordUser);
  18  |     await page.getByRole('button', {name: 'Sign In'}).click()
  19  | 
  20  | 
  21  | })
  22  | 
  23  | test('Verify Dashboard Load', async ({page})=> {
  24  |     await expect(page).toHaveURL(/bank\/dashboard/);
  25  |     await expect(page.getByTestId('dashboard-welcome-message')).toBeVisible();
  26  | 
  27  | })
  28  | 
  29  | test('Verify Total Balance  Display', async ({page}) =>{
  30  |     //Declarate the variable Total net worth located in the Dashboard
  31  |     const totalNetWorthText = await page.locator('[data-testid="stat-card-net-worth-value"]').textContent();
  32  | 
  33  |     //We Start with the Total Balance Widget
  34  |     await page.getByTestId('sidebar-link-accounts').click();
  35  |     //wait for the account rows to load before we start counting
  36  |     await page.locator('[data-testid="account-row"]').first().waitFor();
  37  | 
  38  |     async function getAllAccounts(){
  39  |         const rows: any = page.locator('[data-testid="account-row"]');
  40  |         const count : any = await rows.count();
  41  |         const accounts: any = [];
  42  | 
  43  |         for (let i = 0; i< count; i++) {
  44  |              const row = rows.nth(i);
  45  |              accounts.push({
  46  |                  name: await row.locator('[data-testid="account-row-name"]').textContent(),
  47  |                  balance: await row.locator('[data-testid="account-row-balance"]').textContent(),
  48  |              });
  49  |         }
  50  |         return accounts;
  51  |     }
  52  |     const accountsData = await getAllAccounts();
  53  | 
  54  |     const calculatedTotalSum  = accountsData. reduce((sum: any, account:any) => {
  55  |         const amount = parseFloat (account.balance?.replace(/[$,]/g, "") || '0');
  56  |         return sum + amount;
  57  |     },0);
  58  | 
  59  |     const compareTotalSum = parseFloat(totalNetWorthText?.replace(/[$,]/g, "") || '0');
  60  | 
  61  |     expect(compareTotalSum).toBe(calculatedTotalSum);
  62  |     console.log(`The total sum of all accounts is: ${calculatedTotalSum}`)
  63  | 
  64  | });
  65  | 
  66  | test("Verify Recent Transactions Widget", async ({page}) => {
  67  |     await expect(page).toHaveURL(/bank\/dashboard/);
  68  |     await expect(page.getByRole('heading', { name: /recent transactions/i})).toBeVisible();
  69  | 
  70  |     const rows = page.getByTestId('allop-txn-row')
> 71  |     await rows.first().waitFor();
      |                        ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  72  | 
  73  |     const count = await rows.count();
  74  |     console.log(`Recent Transactions Widget: ${count}`);
  75  | 
  76  |     expect(count).toBeGreaterThan(0);
  77  |     expect(count).toBeLessThanOrEqual(5);
  78  | 
  79  |     for(let i = 0; i < count; i++){
  80  |         const row = rows.nth(i);
  81  |         await expect(row.getByTestId('all-txt-date')).toBeVisible();
  82  |         await expect(row.getByTestId('all-txn-description')).toBeVisible();
  83  |         await expect(row.getByTestId('all-txn-category-badge')).toBeVisible();
  84  | 
  85  |         const amount = row.getByTestId('all-txn-amount');
  86  |         await expect(amount).toBeVisible();
  87  |         await expect(amount).toHaveAttribute('data-amount', /.+/);
  88  |     }
  89  | })
  90  | 
  91  | 
  92  | 
  93  | 
  94  | 
  95  | 
  96  | 
  97  | 
  98  | 
  99  | 
  100 | 
  101 | 
  102 | 
  103 | 
```