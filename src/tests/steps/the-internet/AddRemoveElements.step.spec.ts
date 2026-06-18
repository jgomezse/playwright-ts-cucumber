import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/home.page';
import { AddRemoveElementsPage } from '../../pages/the-internet/AddRemoveElements.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Add & Remove Elements', async ({ page }) => {
    await page.locator(HomePage.AddRemoveElementsLink).click();
});

Then('se visualiza el título Add & Remove Elements', async ({ page }) => {
    await expect(page.locator(AddRemoveElementsPage.title)).toBeVisible();
});

When('se hace clic en Add Element', async ({ page }) => {
    await page.locator(AddRemoveElementsPage.addElementButton).click();
});

Then('se visualiza el botón Delete', async ({ page }) => {
    await expect(page.locator(AddRemoveElementsPage.deleteButton)).toBeVisible();
});

When('se hace clic en Delete', async ({ page }) => {
    await page.locator(AddRemoveElementsPage.deleteButton).click();
});

Then('no se visualiza el botón Delete', async ({ page }) => {
    await expect(page.locator(AddRemoveElementsPage.deleteButton)).not.toBeVisible();
});
