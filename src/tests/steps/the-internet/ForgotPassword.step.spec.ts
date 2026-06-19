import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/Home.page';
import { ForgotPasswordPage } from '../../pages/the-internet/ForgotPassword.page';

const { Given, When, Then } = createBdd();

let responseStatus: number | null = null;

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
    const responsePromise = page.waitForResponse(resp =>
        resp.url().includes('/forgot_password') && resp.request().method() === 'POST'
    );
    await page.locator(ForgotPasswordPage.retrieveButton).click();
    const response = await responsePromise;
    responseStatus = response.status();
});

Then('se realizó la solicitud de recuperación de contraseña', async () => {
    expect(responseStatus).not.toBeNull();
    expect(responseStatus!).toBeGreaterThanOrEqual(200);
});
