import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/home.page';
import { ABTestingPage } from '../../pages/the-internet/ABTesting.page';

const { Given, When, Then } = createBdd();

When('se hace clic en A B Testing', async ({ page }) => {
    await page.locator(HomePage.ABTestingLink).click();
});

Then('se visualiza el título A B Test', async ({ page }) => {
    await expect(page.locator(ABTestingPage.title)).toBeVisible();
});