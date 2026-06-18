import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { DigestAuthenticationPage } from '../../pages/the-internet/DigestAuthentication.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Digest Authentication', async ({ page }) => {
    await page.goto('https://admin:admin@the-internet.herokuapp.com/digest_auth');
});

Then('se visualiza el mensaje de autenticación digest exitosa', async ({ page }) => {
    await expect(page.locator(DigestAuthenticationPage.successMessage)).toBeVisible();
});
