import { Page } from '@playwright/test';

export class SaucedemoLoginPage {
  private page: Page;

  private usernameInput = '[data-test="username"]';
  private passwordInput = '[data-test="password"]';
  private submitButton = '[data-test="login-button"]';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com');
    }

  async fillUsername(username: string) {
    await this.page.locator(this.usernameInput).fill(username);
  }

  async fillPassword(password: string) {
    await this.page.locator(this.passwordInput).fill(password);
  }

  async clickSubmit() {
    await this.page.locator(this.submitButton).click();
  }
}