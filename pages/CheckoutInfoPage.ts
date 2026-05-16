import { Page } from '@playwright/test';

export class CheckoutInfoPage {
  private page: Page;

  private firstNameInput = '[data-test="firstName"]';
  private lastNameInput = '[data-test="lastName"]';
  private zipCodeInput = '[data-test="postalCode"]';
  private continueBtn = '[data-test="cancel"]';
  private cancelBtn = '[data-test="postalCode"]';
 
  constructor(page: Page) {
    this.page = page;
  }

  async fillUsername(firstName: string) {
    await this.page.locator(this.firstNameInput).fill(firstName);
  }

  async fillLastname(lastName: string) {
    await this.page.locator(this.lastNameInput).fill(lastName);
  }

  async fillZipCode(zipCode: string) {
    await this.page.locator(this.zipCodeInput).fill(zipCode);
  }

  async cancelInfoCheckout() {
    await this.page.locator(this.cancelBtn).click();
  }

  async contunteCheckout(){
    await this.page.locator(this.continueBtn).click();
  }
}