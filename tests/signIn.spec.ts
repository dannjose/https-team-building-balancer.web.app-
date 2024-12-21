import { test } from '@playwright/test';
import data from '../fixtures/data.json'; 
import { performLogin } from '../utils/auth';

test('Sign in and make sure it redirects to Home page', async ({ page }) => {
  await performLogin(page, data);
});
