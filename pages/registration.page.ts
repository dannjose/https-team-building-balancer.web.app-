import { Page } from '@playwright/test';
import path from 'path';

export class RegistrationPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToSignUp(signInUrl: string): Promise<void> {
    // Navigate to the sign-in page
    await this.page.goto(signInUrl);

    // Simulate navigation to the sign-up form via key presses
    await this.page.locator('flutter-view').press('Tab');
    await this.page.locator('flutter-view').press('Tab');
    await this.page.locator('flutter-view').press('Tab');
    await this.page.locator('flutter-view').press('Tab');
    await this.page.locator('flutter-view').press('Tab');
    await this.page.locator('flutter-view').press('Enter');
  }

  async fillUpForm(): Promise<void> {
    // Fill in the registration form
    await this.page.locator('flutter-view').press('Tab');
    await this.page.locator('flutter-view').press('Tab');
    await this.page.locator('flutter-view').press('Tab');
    await this.page.getByRole('textbox').fill('newUser');
    await this.page.locator('flutter-view').press('Tab');
    await this.page.getByRole('textbox').fill('emailTest@test.com');
    await this.page.locator('flutter-view').press('Tab');
    await this.page.getByRole('textbox').fill('test123');
    await this.page.locator('flutter-view').press('Tab');
    await this.page.locator('flutter-view').press('Tab');
    await this.page.getByRole('textbox').fill('test123');
    await this.page.locator('flutter-view').press('Tab');
    await this.page.locator('flutter-view').press('Tab');
    await this.page.locator('flutter-view').press('Tab');
    await this.page.locator('flutter-view').press('Enter');
  }
    ///To be implemented in the future
  /*
  private async uploadAvatar(): Promise<void> {
    // Path to the image file
    const filePath = path.resolve(__dirname, '../utils/avatar.png');

    // Set the file in the file input element
    await this.page.setInputFiles('input[type="file"]', filePath);

    // Wait for the upload to complete if necessary
    await this.page.waitForLoadState('networkidle'); 
  }
  */
}
