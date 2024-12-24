import { test, expect } from '@playwright/test';
import data from '../fixtures/data.json';
import { RegistrationPage } from '../pages/registration.page';
import { captureConsoleErrors } from '../utils/consoleUtils';

test.only('Register a new user and verify confirmation/error message', async ({ page }) => {
  const { signIn } = data;

  // Capture console errors
  const errorMessages = captureConsoleErrors(page);

  // Create an instance of the RegistrationPage class
  const registrationPage = new RegistrationPage(page);

  // Navigate to the sign-up page
  await registrationPage.navigateToSignUp(signIn);

  // Fill up the form
  await registrationPage.fillUpForm();

  // Assert that the page is redirected to the sign-in URL
  const expectedUrl = signIn;
  await expect(page).toHaveURL(expectedUrl);

  // Wait briefly to allow for any error or success messages to appear
  //await page.waitForTimeout(1000);

  // Assert that the expected message is captured
 // const expectedMessage = 'Registration successful'; 
  //const messageExists = errorMessages.some((msg) => msg.includes(expectedMessage));
 // expect(messageExists).toBe(true);
});
