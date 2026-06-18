import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/Home.page';
import { DisappearingElementsPage } from '../../pages/the-internet/DisappearingElements.page';

const { Given, When, Then } = createBdd();

When('se hace clic en Disappearing Elements', async ({ page }) => {
    await page.locator(HomePage.DisappearingElementsLink).click();
});

Then('se visualiza la página de Disappearing Elements', async ({ page }) => {
    await expect(page.locator(DisappearingElementsPage.title)).toBeVisible();
    await expect(page.locator(DisappearingElementsPage.contentArea)).toBeVisible();
    const itemCount = await page.locator(DisappearingElementsPage.menuItems).count();
    expect(itemCount).toBeGreaterThanOrEqual(3);
});
