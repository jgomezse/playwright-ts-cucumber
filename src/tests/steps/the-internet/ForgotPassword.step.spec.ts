import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/Home.page';
import { ForgotPasswordPage } from '../../pages/the-internet/ForgotPassword.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Forgot Password', async ({ page }) => {
    await page.locator(HomePage.ForgotPasswordLink).click();
});

Then('se visualiza la página de Forgot Password', async ({ page }) => {
    await expect(page.locator(ForgotPasswordPage.title)).toBeVisible();
});

When('se ingresa el correo {string}', async ({ page }, email: string) => {
    await page.locator(ForgotPasswordPage.emailInput).fill(email);
});

When('se envía el formulario de recuperación', async ({ page }) => {
    await page.locator(ForgotPasswordPage.retrieveButton).click();
});
