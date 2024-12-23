// tests/yourTestFile.spec.js
import { test, expect } from '@playwright/test';
import data from '../fixtures/data.json';
import { performLogin } from '../utils/auth';
import { captureConsoleErrors } from '../utils/consoleUtils';

test('Attempt to log in with invalid credentials and capture error message', async ({ page }) => {
  const { invalidCredentials, signIn } = data;

  // Initialize the console error capture
  const errorMessages = captureConsoleErrors(page);

  // Navigate to the sign-in page
  await page.goto(signIn);

  // Perform login with invalid credentials
  await performLogin(page, { signIn, credentials: invalidCredentials });

  // Wait for a short duration to ensure the error message is logged
  await page.waitForTimeout(1000);

  // Assert that the expected error message is present
  const expectedError = 'Failed to load resource: the server responded with a status of 400 ()';
  const errorOccurred = errorMessages.some(msg => msg.includes(expectedError));
  expect(errorOccurred).toBe(true);
});
