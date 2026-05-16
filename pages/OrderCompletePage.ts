import { Page } from '@playwright/test';

export class OrderCompletePage {
  private page: Page;

  private succesMessage = '[data-test="complete-header"]';

  constructor(page: Page) {
    this.page = page;
  }

  async getConfirmationMessage(){
    return this.page.locator(this.succesMessage);
  }
}