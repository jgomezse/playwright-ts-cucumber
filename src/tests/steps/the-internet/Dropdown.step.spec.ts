import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/Home.page';
import { DropdownPage } from '../../pages/the-internet/DropdownPage.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Dropdown', async ({ page }) => {
    await page.locator(HomePage.DropdownLink).click();
});

Then('se visualiza la página de Dropdown', async ({ page }) => {
    await expect(page.locator(DropdownPage.title)).toBeVisible();
});

When('se selecciona Option {int} en el dropdown', async ({ page }, option: number) => {
    await page.locator(DropdownPage.dropdown).selectOption(`Option ${option}`);
});

Then('Option {int} está seleccionado en el dropdown', async ({ page }, option: number) => {
    await expect(page.locator(DropdownPage.dropdown)).toHaveValue(option.toString());
});
