
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Q1 - Invalid Login Test', async ({ page }, testInfo) => {

    const loginPage = new LoginPage(page);

    // Open login page
    await loginPage.goto();

    // Enter invalid credentials
    await loginPage.login(
        'wronguser123@gmail.com',
        'WrongPassword123'
    );

    // Verify error message
    const error = await loginPage.getErrorMessage();

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
        'No customer account found'
    );

    // Verify user is not logged in
    await expect(page.locator('.ico-login')).toBeVisible();

    console.log('Error message:', error);

    // Attach screenshot to Allure report
    await testInfo.attach('Q1-Invalid-Login-Screenshot', {
        body: await page.screenshot({ fullPage: true }),
        contentType: 'image/png'
    });
});
