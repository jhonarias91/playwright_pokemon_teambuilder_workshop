import { test, expect } from '@playwright/test';
import { PokemonSearchPage } from '../pages/pokemonSearchPage';

const { MainPage } = require('../pages/mainPage');
const { TeamBuilderPage } = require('../pages/teamBuilderPage');
const {MovePage} = require('../pages/movesPage');
const {StatPage} = require('../pages/statsPage');

//impor the json file
const pokemonData = require('../resources/pokemon_data_dirven.json');

test('test create first pokemonData', async ({ page }) => {

    await page.goto('https://play.pokemonshowdown.com/');
    const mainPage = new MainPage(page);
    const teamBuilderPage = new TeamBuilderPage(page);
    const pokemonSearch = new PokemonSearchPage(page);


    await mainPage.goToTeamBuilder();
    await teamBuilderPage.goToCreateTeam();
    await teamBuilderPage.chooseAFormat(pokemonData.format);

    await teamBuilderPage.goToAddNewPokemon();

    const allPokemons = pokemonData.team;

    for (let i = 0; i < allPokemons.length; i++) {     

        //Searching the pokemon 
        const currentPokemon = allPokemons[i]; 
        await pokemonSearch.searchPokemonByName(currentPokemon.name);
        await pokemonSearch.enterItem(currentPokemon.item);
        await pokemonSearch.enterAbility(currentPokemon.ability);
        await pokemonSearch.goToMoves();

        //Page to send the moves dinamically
        const movePage = new MovePage(page, pokemonData.moveInputNames);
        await movePage.typeMoves(currentPokemon.moves);
        await movePage.goToStats();

        //Adding the stats
        const stats = new StatPage(page, pokemonData.statInputNames);
        await stats.typeEvs(currentPokemon.evs);
        const remainingEvs = await stats.getRemainingEvs();

        expect(remainingEvs).toBe('0');
        
    }

});

