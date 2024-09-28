import { test, expect } from '@playwright/test';

const { MainPage } = require('../pages/mainPage');
const { TeamBuilderPage } = require('../pages/teamBuilderPage');

test('test create first pokemon', async ({ page }) => {

    await page.goto('https://play.pokemonshowdown.com/');
    const mainPage = new MainPage(page);
    const teamBuilderPage = new TeamBuilderPage(page);

    await mainPage.goToTeamBuilder();
    await teamBuilderPage.goToCreateTeam();
    await teamBuilderPage.chooseAFormat('Ubers');

    await teamBuilderPage.goToAddNewPokemon();
});

