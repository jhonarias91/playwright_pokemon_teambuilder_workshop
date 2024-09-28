import { test, expect } from '@playwright/test';

const { MainPage } = require('../pages/mainPage');
const { TeamBuilderPage } = require('../pages/teamBuilderPage');

test('test create first pokemon', async ({ page }) => {


    await page.goto('https://play.pokemonshowdown.com/');
    const mainPage = new MainPage(page);

    await mainPage.goToTeamBuilder();

});

