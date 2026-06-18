import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/Home.page';
import { BrokenImagesPage } from '../../pages/the-internet/BrokenImages.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Broken Images', async ({ page }) => {
    await page.locator(HomePage.BrokenImagesLink).click();
});

Then('se visualiza la página de Broken Images', async ({ page }) => {
    await expect(page.locator(BrokenImagesPage.title)).toBeVisible();
    await expect(page.locator(BrokenImagesPage.images)).toHaveCount(3);
});

Then('al menos una imagen está rota', async ({ page }) => {
    const images = page.locator(BrokenImagesPage.images);
    const count = await images.count();
    let brokenFound = false;
    for (let i = 0; i < count; i++) {
        const naturalWidth = await images.nth(i).evaluate((img: HTMLImageElement) => img.naturalWidth);
        if (naturalWidth === 0) {
            brokenFound = true;
            break;
        }
    }
    expect(brokenFound).toBe(true);
});
