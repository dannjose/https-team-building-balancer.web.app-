import { test, expect } from '@playwright/test';

test('Fill out the sign-up form', async ({ page }) => {
  // Navigate to the sign-up page
  await page.goto('https://team-building-balancer.web.app/#/signin');

  // Ensure the page has loaded
  await page.waitForLoadState('load');

  // Click to activate the Flutter interface
  await page.locator('flutter-view').click();

  // Fill out the name field
  await page.getByRole('textbox').fill('test2@test.com');

  // Fill out the password field (direct access based on the captured selector)
  await page.locator('flutter-view').press('Tab');
  await page.locator('input[type="password"]').fill('test#123');

  // Submit the form
  await page.locator('flutter-view').press('Tab');
  await page.locator('flutter-view').press('Tab');
  await page.locator('flutter-view').press('Enter');

  // Assert that the URL is correct
  await expect(page).toHaveURL('https://team-building-balancer.web.app/#/premiumSports');
});
