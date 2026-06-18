import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/Home.page';
import { DragAndDropPage } from '../../pages/the-internet/DragAndDrop.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Drag and Drop', async ({ page }) => {
    await page.locator(HomePage.DragAndDropLink).click();
});

Then('se visualiza la página de Drag and Drop', async ({ page }) => {
    await expect(page.locator(DragAndDropPage.title)).toBeVisible();
});

When('se arrastra la columna A sobre la columna B', async ({ page }) => {
    await page.locator(DragAndDropPage.columnA).dragTo(page.locator(DragAndDropPage.columnB));
});

Then('la columna A está a la derecha de la columna B', async ({ page }) => {
    await expect(page.locator(DragAndDropPage.headerA)).toHaveText('B');
    await expect(page.locator(DragAndDropPage.headerB)).toHaveText('A');
});
