
class ShoppingPage {
    constructor(page) {
        this.page = page;
        this.searchBox = page.locator('#small-searchterms');
        this.searchButton = page.locator('input.button-1.search-box-button');
    }

    async searchProduct(productName) {
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }

    async openFirstProduct() {
        await this.page.locator('.product-item .product-title a').first().click();
    }

    async addToCart(quantity) {
        const quantityBox = this.page.locator('.qty-input').first();
        await quantityBox.fill(String(quantity));

        await this.page.locator('[id^="add-to-cart-button-"]').first().click();
    }
}

module.exports = ShoppingPage;
