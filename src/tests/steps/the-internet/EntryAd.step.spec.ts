import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/Home.page';
import { EntryAdPage } from '../../pages/the-internet/EntryAd.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Entry Ad', async ({ page }) => {
    await page.locator(HomePage.EntryAdLink).click();
});

Then('se visualiza el modal de Entry Ad', async ({ page }) => {
    await expect(page.locator(EntryAdPage.modalTitle)).toBeVisible({ timeout: 3000 });
});

When('se cierra el modal', async ({ page }) => {
    await page.locator(EntryAdPage.closeLink).click();
});

Then('el modal no está visible', async ({ page }) => {
    await expect(page.locator(EntryAdPage.modal)).not.toBeVisible();
});
