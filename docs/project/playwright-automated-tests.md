## Adding Basic Tests with Playwright (Accessibility Checks)

Setting up automated tests will improve the reliability of your theme. You mentioned using **Playwright** – a good choice for end-to-end testing, which can also check accessibility. We can start with a very basic test to catch obvious accessibility issues on a rendered page.

### Setup Playwright

If not already done, install Playwright in your project (e.g. with npm install --save-dev @playwright/test or by using the Playwright CLI). Also install the Axe accessibility library integration: npm install --save-dev @axe-core/playwright. The @axe-core/playwright package lets Playwright run axe checks on pages [**playwright.dev**](https://playwright.dev/docs/accessibility-testing#:~:text=The%20following%20examples%20rely%20on,part%20of%20your%20Playwright%20tests).

### Write a simple accessibility test

Create a test file (for example, __tests__/accessibility.spec.ts). In the test, you’ll launch a browser, open a page of your theme, and run Axe. For example:


```typescript

import { test, expect } from '@playwright/test';

import AxeBuilder from '@axe-core/playwright';


test('Homepage has no obvious accessibility violations', async ({ page }) => {

// Navigate to the local site (adjust URL to your dev site or staging URL)

await page.goto('http://localhost:8000');

// Run axe-core accessibility scan

const results = await new AxeBuilder({ page }).analyze();

// The AxeBuilder results include a list of violations. We expect none.

expect(results.violations).toEqual([]);

});

```


This test uses **Axe** to scan the entire page for automatically-detectable a11y issues [**playwright.dev**](https://playwright.dev/docs/accessibility-testing#:~:text=This%20example%20demonstrates%20how%20to,The%20test)[**playwright.dev**](https://playwright.dev/docs/accessibility-testing#:~:text=test.describe%28%27homepage%27%2C%20%28%29%20%3D,site.com%2F%27%29%3B%20%2F%2F%203). If any issues are found (e.g. missing alt attributes, low contrast, etc.), the violations array will contain them, and the test will fail. You can add more tests or assertions as needed – for instance, checking that certain important elements exist. Playwright can also interact with the page (click buttons, navigate links), but for starting out, a static scan is very useful.

### Tip

When running Playwright tests locally, you might need to specify the base URL or start a local WP server. For a WordPress theme, one approach is to use **npm run wp-env** or a tool like LocalWP to spin up a test site, and then point Playwright to that URL. In CI, you could do something similar (or use a service to host a test site). For now, you can run the tests manually against your local environment.

After writing the test, verify it by running Playwright’s test runner (e.g. npx playwright test). Playwright will open a browser in the background and report results. The first run might also prompt you to install browser binaries – follow the instructions (usually npx playwright install). Once it passes, you have a baseline guard for accessibility.

As you expand, you can add more tests: for example, a navigation test (clicking menu links), a visual regression test, etc. But even a couple of basic tests will be a good start to catch errors early.