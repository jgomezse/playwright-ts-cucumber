import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { BasicAuthPage } from '../../pages/the-internet/BasicAuth.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Basic Auth', async ({ page }) => {
    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
});

Then('se visualiza el mensaje de autenticación exitosa', async ({ page }) => {
    await expect(page.locator(BasicAuthPage.successMessage)).toBeVisible();
});
