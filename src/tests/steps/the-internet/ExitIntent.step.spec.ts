import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/Home.page';
import { ExitIntentPage } from '../../pages/the-internet/ExitIntent.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Exit Intent', async ({ page }) => {
    await page.locator(HomePage.ExitIntentLink).click();
});

Then('se visualiza la página de Exit Intent', async ({ page }) => {
    await expect(page.locator(ExitIntentPage.title)).toBeVisible();
});

When('se mueve el mouse fuera del viewport', async ({ page }) => {
    const viewport = page.viewportSize()!;
    await page.mouse.move(viewport.width / 2, viewport.height / 2);
    await page.mouse.move(viewport.width / 2, 0);
    await page.mouse.move(viewport.width / 2, -1);
});

Then('se visualiza el modal de Exit Intent', async ({ page }) => {
    await expect(page.locator(ExitIntentPage.modalTitle)).toBeVisible({ timeout: 3000 });
});
