
class LoginPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.emailField = page.locator("#Email");
        this.passwordField = page.locator("#Password");
        this.loginButton = page.locator(".login-button");
        this.errorMessage = page.locator(".validation-summary-errors");
    }

    // Open Login Page
    async goto() {
        await this.page.goto("https://demowebshop.tricentis.com/login");
    }

    // Login with email and password
    async login(email, password) {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    // Get error message
    async getErrorMessage() {
        return await this.errorMessage.innerText();
    }
}

module.exports = LoginPage;
