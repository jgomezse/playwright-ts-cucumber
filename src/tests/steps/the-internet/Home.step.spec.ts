import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/the-internet/Home.page';

const { Given, When, Then } = createBdd();

Given('se ingresa al sitio The Internet', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page.locator(HomePage.welcomeMessage)).toBeVisible();
});