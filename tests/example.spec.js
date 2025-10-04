
// tests/example.spec.js
const { test, expect } = require('@playwright/test');

test('simple demo test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
