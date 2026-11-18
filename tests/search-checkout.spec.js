
const { test, expect } = require('@playwright/test');
const ShoppingPage = require('../pages/ShoppingPage');

test('Q3 - Product Search to Checkout and Order Confirmation', async ({ page }, testInfo) => {

    const shopping = new ShoppingPage(page);

    // Step 1: Open website
    await page.goto('https://demowebshop.tricentis.com/');

    // Step 2: Search product
    await shopping.searchProduct('computer');
    await expect(page.locator('.product-item').first()).toBeVisible();

    // Step 3: Open product
    await shopping.openFirstProduct();
    await expect(page.locator('.product-name')).toBeVisible();

    // Step 4: Add quantity 2
    await page.locator('.qty-input').first().fill('2');
    await page.locator('[id^="add-to-cart-button-"]').first().click();

    await expect(page.locator('.bar-notification'))
        .toContainText('The product has been added to your shopping cart');

    // Step 5: Open shopping cart
    await page.getByRole('link', { name: /Shopping cart/ }).first().click();
    await expect(page.locator('.cart-item-row')).toBeVisible();
    await expect(page.locator('.qty-input').first()).toHaveValue('2');

    // Step 6: Checkout
    await page.locator('#termsofservice').check();
    await page.locator('#checkout').click();

    // Step 7: Guest checkout
    await page.locator('.checkout-as-guest-button').click();

    // Step 8: Billing Address
    await expect(page.locator('#BillingNewAddress_FirstName')).toBeVisible();

    await page.locator('#BillingNewAddress_FirstName').fill('Jannatul');
    await page.locator('#BillingNewAddress_LastName').fill('Ferdous');
    await page.locator('#BillingNewAddress_Email')
        .fill(`liza${Date.now()}@gmail.com`);

    await page.locator('#BillingNewAddress_CountryId')
        .selectOption({ label: 'Bangladesh' });

    await page.locator('#BillingNewAddress_City').fill('Chattogram');
    await page.locator('#BillingNewAddress_Address1').fill('Agrabad');
    await page.locator('#BillingNewAddress_ZipPostalCode').fill('4100');
    await page.locator('#BillingNewAddress_PhoneNumber').fill('01712345678');

    await page.locator('#billing-buttons-container .button-1').click();

    // Step 9: Shipping Address
    await page.locator('#shipping-buttons-container .button-1').click();

    // Step 10: Shipping Method
    await expect(page.locator('#shippingoption_0')).toBeVisible();
    await page.locator('#shippingoption_0').check();

    await page.locator('#shipping-method-buttons-container .button-1').click();

    // Step 11: Payment Method
    await page.waitForTimeout(1500);

    console.log('Payment Method:', await page.locator('#checkout-step-payment-method').innerText());

    const paymentOptions = page.locator('input[name="paymentmethod"]:visible');
    await expect(paymentOptions.first()).toBeVisible();

    await paymentOptions.first().check();

    await page.locator('#payment-method-buttons-container .button-1').click();

    // Step 12: Payment Information
    await page.waitForTimeout(1500);

    console.log('Payment Information:', await page.locator('#checkout-step-payment-info').innerText());

    await page.locator('#payment-info-buttons-container .button-1').click();

    // Step 13: Confirm Order
    await page.waitForTimeout(1500);

    console.log('Confirm Order:', await page.locator('#checkout-step-confirm-order').innerText());

    await page.locator('#confirm-order-buttons-container .button-1').click();

    // Step 14: Order Confirmation
    await expect(page.locator('.order-completed')).toBeVisible();

    await expect(page.locator('.order-completed'))
        .toContainText('Your order has been successfully processed');

    console.log('ORDER CONFIRMATION SUCCESSFUL');

    // Attach screenshot to Allure report
    await testInfo.attach('Q3-Order-Confirmation-Screenshot', {
        body: await page.screenshot({ fullPage: true }),
        contentType: 'image/png'
    });

});
