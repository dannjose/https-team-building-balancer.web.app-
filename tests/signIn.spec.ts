import { test, expect } from '@playwright/test';
import data from '../fixtures/data.json';
import { performLogin } from '../utils/auth';

test('Sign in and verify redirection to Home page with essential elements', async ({ page }) => {
  const { url, expectedRedirectUrl, credentials } = data;

  // Perform login
  await performLogin(page, { url, credentials });

  // Wait for navigation to complete
  await page.waitForURL(expectedRedirectUrl);

  // Assert that the URL is correct
  expect(page.url()).toBe(expectedRedirectUrl);
});
