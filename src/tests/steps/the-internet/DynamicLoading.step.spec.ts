import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/Home.page';
import { DynamicLoadingPage } from '../../pages/the-internet/DynamicLoading.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Dynamic Loading', async ({ page }) => {
    await page.locator(HomePage.DynamicLoadingLink).click();
});

Then('se visualiza la página de Dynamic Loading', async ({ page }) => {
    await expect(page.locator(DynamicLoadingPage.title)).toBeVisible();
});

When('se hace clic en Example 1', async ({ page }) => {
    await page.locator(DynamicLoadingPage.example1Link).click();
});

When('se hace clic en Start', async ({ page }) => {
    await page.locator(DynamicLoadingPage.startButton).click();
});

Then('se visualiza el elemento Hello World', async ({ page }) => {
    await expect(page.locator(DynamicLoadingPage.finishText)).toHaveText('Hello World!');
});
