import { test, expect } from '@playwright/test';
import data from '../fixtures/data.json';
import { performLogin } from '../utils/auth';

test('Attempt to log in with invalid credentials and capture error message', async ({ page }) => {
  const { invalidCredentials, url } = data;
  let errorMessage = '';

  // It was necessary to capture the error message from the console logs and store it in a variable 
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errorMessage = msg.text();
    }
  });

  // Navigate to the sign-in page
  await page.goto(url);

  // Perform login with invalid credentials
  await performLogin(page, { url, credentials: invalidCredentials });

  // Wait for a short duration to ensure the error message is logged
  await page.waitForTimeout(1000);

  // This is not the best way to validate the error message, but it works for now, the status code indicate an error
  expect(errorMessage).toContain('Failed to load resource: the server responded with a status of 400 ()');
});
