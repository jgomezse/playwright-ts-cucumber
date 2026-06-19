import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/Home.page';
import { FormAuthenticationPage } from '../../pages/the-internet/FormAuthentication.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Form Authentication', async ({ page }) => {
    await page.locator(HomePage.FormAuthenticationLink).click();
});

Then('se visualiza la página de Login', async ({ page }) => {
    await expect(page.locator(FormAuthenticationPage.title)).toBeVisible();
});

When('se ingresa el usuario {string}', async ({ page }, username: string) => {
    await page.locator(FormAuthenticationPage.usernameInput).fill(username);
});

When('se ingresa la contraseña {string}', async ({ page }, password: string) => {
    await page.locator(FormAuthenticationPage.passwordInput).fill(password);
});

When('se inicia sesión', async ({ page }) => {
    await page.locator(FormAuthenticationPage.loginButton).click();
});

Then('se visualiza el mensaje de login exitoso', async ({ page }) => {
    await expect(page.locator(FormAuthenticationPage.secureAreaTitle)).toBeVisible();
    await expect(page.locator(FormAuthenticationPage.flashMessage)).toContainText('You logged into a secure area');
});
