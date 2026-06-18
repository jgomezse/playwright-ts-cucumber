import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/Home.page';
import { FileDownloadPage } from '../../pages/the-internet/FileDownload.page';

const { Given, When, Then } = createBdd();

When('se hace clic en File Download', async ({ page }) => {
    await page.locator(HomePage.FileDownloadLink).click();
});

Then('se visualiza la página de File Download', async ({ page }) => {
    await expect(page.locator(FileDownloadPage.title)).toBeVisible();
});

When('se descarga el archivo {string}', async ({ page }, fileName: string) => {
    const downloadPromise = page.waitForEvent('download');
    await page.locator(FileDownloadPage.fileLink(fileName)).click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe(fileName);
});
