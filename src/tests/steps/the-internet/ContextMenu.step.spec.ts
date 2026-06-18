import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/home.page';
import { ContextMenuPage } from '../../pages/the-internet/ContextMenu.page';

const { Given, When, Then } = createBdd();

let lastDialogMessage = '';

When('se hace clic en Context Menu', async ({ page }) => {
    await page.locator(HomePage.ContextMenuLink).click();
});

Then('se visualiza la página de Context Menu', async ({ page }) => {
    await expect(page.locator(ContextMenuPage.title)).toBeVisible();
});

When('se hace clic derecho en el cuadro', async ({ page }) => {
    page.on('dialog', async (dialog) => {
        lastDialogMessage = dialog.message();
        await dialog.accept();
    });
    await page.locator(ContextMenuPage.hotSpot).click({ button: 'right' });
});

Then('se visualiza el mensaje del menú contextual', async ({ page }) => {
    expect(lastDialogMessage).toBe('You selected a context menu');
});
