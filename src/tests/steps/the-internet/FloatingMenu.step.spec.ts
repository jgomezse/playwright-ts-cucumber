import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/Home.page';
import { FloatingMenuPage } from '../../pages/the-internet/FloatingMenu.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Floating Menu', async ({ page }) => {
    await page.locator(HomePage.FloatingMenuLink).click();
});

Then('se visualiza la página de Floating Menu', async ({ page }) => {
    await expect(page.locator(FloatingMenuPage.title)).toBeVisible();
});

When('se desplaza la página hacia abajo', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
});

Then('el menú flotante está visible', async ({ page }) => {
    await expect(page.locator(FloatingMenuPage.menu)).toBeVisible();
});
