import { Page } from '@playwright/test';

export class CheckoutInfoPage {
  private page: Page;

  private firstNameInput = '[data-test="firstName"]';
  private lastNameInput = '[data-test="lastName"]';
  private zipCodeInput = '[data-test="postalCode"]';
  private continueBtn = '[data-test="continue"]'; 
  private cancelBtn = '[data-test="cancel"]';       

  constructor(page: Page) {
    this.page = page;
  }

  async fillFirstName(firstName: string) {         
    await this.page.locator(this.firstNameInput).fill(firstName);
  }

  async fillLastName(lastName: string) {           
    await this.page.locator(this.lastNameInput).fill(lastName);
  }

  async fillZipCode(zipCode: string) {
    await this.page.locator(this.zipCodeInput).fill(zipCode);
  }

  async clickContinue() {                        
    await this.page.locator(this.continueBtn).click();
  }

  async clickCancel() {                           
    await this.page.locator(this.cancelBtn).click();
  }
}