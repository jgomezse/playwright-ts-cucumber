import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import path from 'path';
import { fileURLToPath } from 'url';
import { HomePage } from '../../pages/the-internet/Home.page';
import { FileUploadPage } from '../../pages/the-internet/FileUpload.page';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { Given, When, Then } = createBdd();

When('se hace clic en File Upload', async ({ page }) => {
    await page.locator(HomePage.FileUploadLink).click();
});

Then('se visualiza la página de File Upload', async ({ page }) => {
    await expect(page.locator(FileUploadPage.title)).toBeVisible();
});

When('se sube el archivo', async ({ page }) => {
    const filePath = path.resolve(__dirname, '../../fixtures/test.txt');
    await page.locator(FileUploadPage.fileInput).setInputFiles(filePath);
    await page.locator(FileUploadPage.uploadButton).click();
});

Then('el archivo se ha subido correctamente', async ({ page }) => {
    await expect(page.locator(FileUploadPage.uploadSuccessTitle)).toBeVisible();
    await expect(page.locator(FileUploadPage.uploadedFiles)).toContainText('test.txt');
});
