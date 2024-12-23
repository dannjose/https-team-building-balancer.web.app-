import { test, expect } from '@playwright/test';
import data from '../fixtures/data.json';
import { performLogin } from '../utils/auth';

test('Sign in and verify redirection to Home page with essential elements', async ({ page }) => {
  const { signIn, expectedRedirectUrl, credentials } = data;

  // Perform login
  await performLogin(page, { signIn, credentials });

  // Wait for navigation to complete
  await page.waitForURL(expectedRedirectUrl);

  // Assert that the URL is correct
  expect(page.url()).toBe(expectedRedirectUrl);
});
