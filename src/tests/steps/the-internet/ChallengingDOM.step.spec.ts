import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/Home.page';
import { ChallengingDOMPage } from '../../pages/the-internet/ChallengingDOM.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Challenging DOM', async ({ page }) => {
    await page.locator(HomePage.ChallengingDOMLink).click();
});

Then('se visualiza la página de Challenging DOM', async ({ page }) => {
    await expect(page.locator(ChallengingDOMPage.title)).toBeVisible();
});

Then('se visualizan los 3 botones', async ({ page }) => {
    await expect(page.locator(ChallengingDOMPage.buttonPlain)).toBeVisible();
    await expect(page.locator(ChallengingDOMPage.buttonAlert)).toBeVisible();
    await expect(page.locator(ChallengingDOMPage.buttonSuccess)).toBeVisible();
});

Then('la tabla tiene {int} filas', async ({ page }, rowCount: number) => {
    await expect(page.locator(ChallengingDOMPage.tableRows)).toHaveCount(rowCount);
});

Then('la tabla tiene {int} columnas', async ({ page }, colCount: number) => {
    await expect(page.locator(ChallengingDOMPage.tableHeaders)).toHaveCount(colCount);
});
