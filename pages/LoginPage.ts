import { Page } from '@playwright/test';

export class LoginPage {
  // The page object (our browser tab)
  private page: Page;

  // The selectors — defined in ONE place
  private usernameInput = '#username';
  private passwordInput = '#password';
  private submitButton = '#submit';
  private errorMessage = '#error';

  // Constructor — runs when we create a LoginPage
  constructor(page: Page) {
    this.page = page;
  }

  // Actions — things the Login Page can DO
  async goto() {
    await this.page.goto('/practice-test-login');
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

  async getErrorMessage() {
    return this.page.locator(this.errorMessage);
  }
}