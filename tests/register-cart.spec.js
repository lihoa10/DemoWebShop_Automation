
const { test, expect } = require('@playwright/test');
const RegisterPage = require('../pages/RegisterPage');

test('Q2 - Register and Add Product to Cart', async ({ page }, testInfo) => {

    const registerPage = new RegisterPage(page);

    // Generate a unique email for every run
    const email = `liza${Date.now()}@gmail.com`;
    const password = 'Test@12345';

    // Register a new customer
    await registerPage.goto();

    await registerPage.register(
        'Jannatul',
        'Ferdous',
        email,
        password
    );

    // Verify registration success
    await expect(registerPage.successMessage).toContainText(
        'Your registration completed'
    );

    // Go to Books category
    await page.goto('https://demowebshop.tricentis.com/books');

    // Select the first product
    const product = page.locator('.product-item').first();

    await expect(product).toBeVisible();

    const productName = await product.locator('.product-title').innerText();

    // Add product to cart
    await product.locator('input[value="Add to cart"]').click();

    // Verify success notification
    await expect(page.locator('.bar-notification'))
        .toContainText('The product has been added to your shopping cart');

    // Open shopping cart
    await page.getByRole('link', { name: /Shopping cart/ }).first().click();

    // Verify product is in cart
    await expect(page.locator('.cart-item-row')).toBeVisible();

    await expect(page.locator('.cart-item-row'))
        .toContainText(productName);

    console.log('Registered email:', email);
    console.log('Product added:', productName);

    // Attach screenshot to Allure report
    await testInfo.attach('Q2-Register-Cart-Screenshot', {
        body: await page.screenshot({ fullPage: true }),
        contentType: 'image/png'
    });
});
