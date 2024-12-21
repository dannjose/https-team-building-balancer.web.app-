import { Page } from '@playwright/test';
import * as data from '../fixtures/data.json';

export class BasePage {
  readonly page: Page;
  readonly url: string;

  constructor(page: Page) {
    this.page = page;
    this.url = data.url; 
  }

  async navigateToSignIn(): Promise<void> {
    await this.page.goto(this.url);
  }
}
