import {Page, Locator} from '@playwright/test';

export class PokemonSearchPage{
    private readonly pokemonNameText : Locator;


    constructor(public page: Page){
        this.pokemonNameText = this.page.locator('input[name="pokemon"]');        
    }

    async searchPokemonByName(pokemonName: string){
        await this.pokemonNameText.pressSequentially(pokemonName, {delay:1});
    }

    async goToMoves(){
        await this.pokemonNameText.press('Enter');        
    }
}