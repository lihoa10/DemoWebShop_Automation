
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    fullyParallel: false,
    workers: 1,
    timeout: 90000,

    reporter: [
        ['list'],
        ['html', {
            outputFolder: 'playwright-report',
            open: 'never'
        }],
        ['allure-playwright']
    ],

    use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure'
    }
});
