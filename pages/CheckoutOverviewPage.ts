import { Page } from '@playwright/test';

export class CheckoutOverviewPage {
  private page: Page;

  private finishcheckoutBtn = '[data-test="finish"]';

  constructor(page: Page) {
    this.page = page;
  }

  async clickFinish(){
    await this.page.locator(this.finishcheckoutBtn).click();
  }
}