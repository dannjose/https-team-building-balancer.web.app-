import { test, expect } from '@playwright/test';
import data from '../fixtures/data.json'; // Adjust the path if necessary
import { performLogin } from '../utils/auth';

// Reuse login logic in beforeEach
test.beforeEach(async ({ page }) => {
  await performLogin(page, data);
});

test.skip('Automate Team Building Flow', async ({ page }) => {
  // Select VolleyBall as the sport
  await page.locator('flutter-view').press('Tab');
  await page.locator('flutter-view').press('Tab');
  await page.locator('flutter-view').click();

  // Enter the number of players and teams
  await page.waitForURL('https://team-building-balancer.web.app/#/skills');
  await page.getByRole('textbox').nth(1).fill('100');
  await page.locator('flutter-view').press('Tab');
  await page.getByRole('textbox').fill('10');
  await page.click('button:has-text("Next")'); 

  // Generate teams
  await page.waitForURL('https://team-building-balancer.web.app/#/players');
  await page.click('button:has-text("Generate teams")'); 

  // Assign names to players
  await page.fill('input[placeholder="Player 1"]', 'Player1');
  await page.fill('input[placeholder="Player 2"]', 'Player2'); 

  // Verify players' names
  const player1Name = await page.inputValue('input[placeholder="Player 1"]');
  const player2Name = await page.inputValue('input[placeholder="Player 2"]');
  expect(player1Name).toBe('Player1');
  expect(player2Name).toBe('Player2');
});
