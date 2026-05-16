import { Page } from '@playwright/test';

export class CartPage {
  private page: Page;

  private checkoutBtn = '[data-test="checkout"]';
  private continueShoppingBtn = '[data-test="continue-shopping"]';

  constructor(page: Page) {
    this.page = page;
  }

  async checkout() {
    await this.page.locator(this.checkoutBtn).click();
  }

  async continueShopping(){
    await this.page.locator(this.continueShoppingBtn).click();
  }
}