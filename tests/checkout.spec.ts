import { test, expect } from '@playwright/test';
import { SaucedemoLoginPage } from '../pages/SaucedemoLoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutInfoPage } from '../pages/CheckoutInfoPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { OrderCompletePage } from '../pages/OrderCompletePage';

test('complete checkout flow', async ({ page }) => {

  const Title = '[data-test="title"]'
  const addProduct = '[data-test="remove-sauce-labs-bike-light"]'
  const checkout ='[data-test="checkout"]'
  const paymentInfo = '[data-test="payment-info-label'
  // Step 1: Login
  const loginPage = new SaucedemoLoginPage(page);
  await loginPage.goto();
  await loginPage.fillUsername('standard_user');
  await loginPage.fillPassword('secret_sauce');
  await loginPage.clickSubmit();
  // Step 2: Add product to cart
  const productsPage = new ProductsPage(page);
  await productsPage.addProductToCart();
  // Step 3: Go to cart
  await productsPage.goToCart();
  // Step 4: Proceed to checkout
  const cartPage = new CartPage(page);
  await cartPage.checkout();
  // await expect(page.getByLabel(checkout));
  
  // Step 5: Fill checkout information
  const checkoutInfoPage = new CheckoutInfoPage(page);
  await checkoutInfoPage.fillFirstName('Jhoselin');
  await checkoutInfoPage.fillLastName('Quiroga');
  await checkoutInfoPage.fillZipCode('0000');
  await checkoutInfoPage.clickContinue();
  // Step 6: Click finish
  const checkoutOverviewPage = new CheckoutOverviewPage(page);
  await checkoutOverviewPage.clickFinish();

  // Step 7: Verify confirmation message says 'Thank you for your order!'
  const orderCompletePage = new OrderCompletePage(page);
  await orderCompletePage.getConfirmationMessage();
  await expect(page.locator('h2')).toHaveText("Thank you for your order!");
});