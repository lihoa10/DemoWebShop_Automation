# DemoWebShop Automation Project

## 1. Project Overview

This project automates the testing of the Demo Web Shop website using Playwright with JavaScript.

The project follows the Page Object Model (POM) design pattern to make test scripts organized and reusable.

Website: https://demowebshop.tricentis.com/

## 2. Technology Stack

- JavaScript
- Node.js
- Playwright
- Playwright Test
- Page Object Model (POM)
- Allure Report
- Git and GitHub
- Visual Studio Code

## 3. Project Structure

```text
DemoWebShop_Automation/
│
├── tests/
│   ├── login.spec.js
│   ├── register-cart.spec.js
│   └── search-checkout.spec.js
│
├── pages/
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   └── ShoppingPage.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## 4. Installation and Setup

### Prerequisites

- Node.js
- Visual Studio Code
- Git

### Steps

1. Clone the repository:

```bash
git clone https://github.com/lihoa10/DemoWebShop_Automation.git
```

2. Navigate to the project folder:

```bash
cd DemoWebShop_Automation
```

3. Install dependencies:

```bash
npm install
```

4. Install Playwright Chromium:

```bash
npx playwright install chromium
```

## 5. Run Individual Test Scenarios

### Question 1: Invalid Login Test

```bash
npx playwright test tests/login.spec.js
```

### Question 2: Registration and Add Product to Cart

```bash
npx playwright test tests/register-cart.spec.js
```

### Question 3: Product Search to Checkout and Order Confirmation

```bash
npx playwright test tests/search-checkout.spec.js
```

## 6. Run All Test Scenarios

To execute all test cases:

```bash
npx playwright test
```

## 7. Generate Test Reports

### Playwright HTML Report

Run the tests and generate the HTML report:

```bash
npx playwright test
```

Open the report:

```bash
npx playwright show-report
```

### Allure Report

Generate the Allure report:

```bash
npx allure generate ./allure-results --clean -o ./allure-report
```

Open the Allure report:

```bash
npx allure open --port 5050 ./allure-report
```

## 8. Test Scenarios

| Question | Test Scenario |
|---|---|
| Q1 | Invalid Login |
| Q2 | User Registration and Add Product to Cart |
| Q3 | Product Search, Checkout and Order Confirmation |

## 9. Repository

GitHub Repository:

https://github.com/lihoa10/DemoWebShop_Automation

## 10. Author

**Jannatul Ferdous Liza**

Automation Testing Project – DemoWebShop
