import { Page } from '@playwright/test';

export class ProductsPage {
  private page: Page;

  private addToCartBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
  private cartLink = '[data-test="shopping-cart-link"]';

 
  constructor(page: Page) {
    this.page = page;
  }

  async addProductToCart() {
    await this.page.locator(this.addToCartBtn).click();
  }

  async goToCart(){
    await this.page.locator(this.cartLink).click();
  }
}