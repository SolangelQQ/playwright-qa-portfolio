import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('successful login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.fillUsername('student');
  await loginPage.fillPassword('Password123');
  await loginPage.clickSubmit();
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');
  
});

test('failed login with incorrect password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.fillUsername('student');
  await loginPage.fillPassword('wrongpass');
  await loginPage.clickSubmit();

  await expect(await loginPage.getErrorMessage()).toHaveText('Your password is invalid!');
});

test('failed login with incorrect username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillUsername('wronguser');
    await loginPage.fillPassword('Password123');
    await loginPage.clickSubmit();
    await expect(await loginPage.getErrorMessage()).toHaveText('Your username is invalid!');
    
})
