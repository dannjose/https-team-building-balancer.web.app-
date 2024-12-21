import { test, expect } from '@playwright/test';
import data from '../fixtures/data.json'; // Adjust the path if necessary

test('Fill out the sign-in form using data from JSON', async ({ page }) => {
  // Extract values from the imported data
  const { url, credentials } = data;
  const { username, password } = credentials;

  // Navigate to the sign-in page
  await page.goto(url);

  // Ensure the page has loaded
  await page.waitForLoadState('load');

  // Click to activate the Flutter interface
  await page.locator('flutter-view').click();

  // Fill out the username field
  await page.getByRole('textbox').fill(username);

  // Fill out the password field
  await page.locator('flutter-view').press('Tab');
  await page.locator('input[type="password"]').fill(password);

  // Submit the form
  await page.locator('flutter-view').press('Tab');
  await page.locator('flutter-view').press('Tab');
  await page.locator('flutter-view').press('Enter');

  // Assert that the URL is correct
  await expect(page).toHaveURL('https://team-building-balancer.web.app/#/premiumSports');
});
