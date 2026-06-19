import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/Home.page';
import { FramesPage } from '../../pages/the-internet/Frames.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Frames', async ({ page }) => {
    await page.locator(HomePage.FramesLink).click();
});

Then('se visualiza la página de Frames', async ({ page }) => {
    await expect(page.locator(FramesPage.title)).toBeVisible();
});

When('se hace clic en Nested Frames', async ({ page }) => {
    await page.locator(FramesPage.nestedFramesLink).click();
    await page.waitForURL('**/nested_frames');
});

Then('se visualizan los frames anidados', async ({ page }) => {
    const topFrame = page.frame('frame-top');
    expect(topFrame).not.toBeNull();

    const bottomFrame = page.frame('frame-bottom');
    expect(bottomFrame).not.toBeNull();
});

Then('se visualiza el texto {string} en el frame central', async ({ page }, text: string) => {
    const topFrame = page.frame('frame-top');
    const middleFrame = topFrame?.childFrames().find(f => f.name() === 'frame-middle');
    expect(middleFrame).not.toBeNull();
    await expect(middleFrame!.locator('body')).toContainText(text);
});
