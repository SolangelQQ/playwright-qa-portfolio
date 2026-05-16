import { Page } from '@playwright/test';

export class ProductsPage {
  private page: Page;

  // Add the selector for:
  // 1. Add to cart button (bolt t-shirt)
  // 2. Cart link

  private addToCartBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
  private cartLink = '[data-test="shopping-cart-link"]';

 
  constructor(page: Page) {
    this.page = page;
  }

  // Add methods for:
  // 1. addProductToCart()
  // 2. goToCart()

  async addProductToCart() {
    await this.page.locator(this.addToCartBtn).click();
  }

  async goToCart(){
    await this.page.locator(this.cartLink).click();
  }
}