import { test, expect } from '@playwright/test';
import { PokemonSearchPage } from '../pages/pokemonSearchPage';

const { MainPage } = require('../pages/mainPage');
const { TeamBuilderPage } = require('../pages/teamBuilderPage');
const {MovePage} = require('../pages/movesPage');
const {StatPage} = require('../pages/statsPage');

//impor the json file
const pokemonData = require('../resources/pokemon_data_dirven.json');

test('test pokemon team succesfully', async ({ page }) => {

    test.setTimeout(120000);
    await page.goto('https://play.pokemonshowdown.com');
    const mainPage = new MainPage(page);
    const teamBuilderPage = new TeamBuilderPage(page);
    const pokemonSearch = new PokemonSearchPage(page);

    await mainPage.goToTeamBuilder();
    await teamBuilderPage.goToCreateTeam();
    //Choose the format and generation
    await teamBuilderPage.chooseAFormat(pokemonData.gen + " "+ pokemonData.format);

    const allPokemons = pokemonData.team;
    //Page to send the moves dinamically
    const movePage = new MovePage(page, pokemonData.moveInputNames);

    //Adding the stats
    const stats = new StatPage(page, pokemonData.statInputNames);

    for (let i = 0; i < allPokemons.length; i++) {     

        await teamBuilderPage.goToAddNewPokemon();
        //Searching the pokemon 
        const currentPokemon = allPokemons[i]; 
        await pokemonSearch.searchPokemonByName(currentPokemon.name);        
        await pokemonSearch.goToMoves();
        
        await movePage.enterItem(currentPokemon.item);
        await movePage.enterAbility(currentPokemon.ability);
        await movePage.typeMoves(currentPokemon.moves);
        await movePage.goToStats();

        await stats.typeEvs(currentPokemon.evs);
        const remainingEvs = await stats.getRemainingEvs();

        expect(remainingEvs).toBe('0');
        
        await pokemonSearch.goToteam();
    }

    await teamBuilderPage.validateTeam();

    await expect(teamBuilderPage.getPopUpText()).resolves.toBe(`Your team is valid for ${pokemonData.gen} ${pokemonData.format}.`);
    //Close the page manually
    await page.close();
});

