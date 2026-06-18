import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/Home.page';
import { DynamicControlsPage } from '../../pages/the-internet/DynamicControls.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Dynamic Controls', async ({ page }) => {
    await page.locator(HomePage.DynamicControlsLink).click();
});

Then('se visualiza la página de Dynamic Controls', async ({ page }) => {
    await expect(page.locator(DynamicControlsPage.title)).toBeVisible();
});

When('se hace clic en Remove', async ({ page }) => {
    await page.locator(DynamicControlsPage.removeAddButton).click();
    await expect(page.locator(DynamicControlsPage.message)).toHaveText("It's gone!");
});

Then('el checkbox desaparece', async ({ page }) => {
    await expect(page.locator(DynamicControlsPage.checkbox)).not.toBeVisible();
});

When('se hace clic en Add', async ({ page }) => {
    await page.locator(DynamicControlsPage.removeAddButton).click();
    await expect(page.locator(DynamicControlsPage.message)).toHaveText("It's back!");
});

Then('el checkbox aparece', async ({ page }) => {
    await expect(page.locator(DynamicControlsPage.checkbox)).toBeVisible();
});

When('se hace clic en Enable', async ({ page }) => {
    await page.locator(DynamicControlsPage.enableDisableButton).click();
    await expect(page.locator(DynamicControlsPage.message)).toHaveText("It's enabled!");
});

Then('el input está habilitado', async ({ page }) => {
    await expect(page.locator(DynamicControlsPage.input)).toBeEnabled();
});
