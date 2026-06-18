import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/home.page';
import { CheckboxesPage } from '../../pages/the-internet/Checkboxes.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Checkboxes', async ({ page }) => {
    await page.locator(HomePage.CheckboxesLink).click();
});

Then('se visualiza la página de Checkboxes', async ({ page }) => {
    await expect(page.locator(CheckboxesPage.title)).toBeVisible();
});

Then('checkbox 1 está tildado', async ({ page }) => {
    await expect(page.locator(CheckboxesPage.checkbox1)).toBeChecked();
});

Then('checkbox 2 está tildado', async ({ page }) => {
    await expect(page.locator(CheckboxesPage.checkbox2)).toBeChecked();
});

Then('checkbox 1 está destildado', async ({ page }) => {
    await expect(page.locator(CheckboxesPage.checkbox1)).not.toBeChecked();
});

Then('checkbox 2 está destildado', async ({ page }) => {
    await expect(page.locator(CheckboxesPage.checkbox2)).not.toBeChecked();
});

When('se tilde checkbox 1', async ({ page }) => {
    await page.locator(CheckboxesPage.checkbox1).check();
});

When('se tilde checkbox 2', async ({ page }) => {
    await page.locator(CheckboxesPage.checkbox2).check();
});

When('se destilde checkbox 1', async ({ page }) => {
    await page.locator(CheckboxesPage.checkbox1).uncheck();
});

When('se destilde checkbox 2', async ({ page }) => {
    await page.locator(CheckboxesPage.checkbox2).uncheck();
});
