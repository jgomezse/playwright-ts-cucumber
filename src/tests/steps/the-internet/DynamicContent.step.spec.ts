import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/Home.page';
import { DynamicContentPage } from '../../pages/the-internet/DynamicContent.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Dynamic Content', async ({ page }) => {
    await page.locator(HomePage.DynamicContentLink).click();
});

Then('se visualiza la página de Dynamic Content', async ({ page }) => {
    await expect(page.locator(DynamicContentPage.title)).toBeVisible();
});

Then('se visualizan 3 filas de contenido', async ({ page }) => {
    await expect(page.locator(DynamicContentPage.rows)).toHaveCount(3);
});
