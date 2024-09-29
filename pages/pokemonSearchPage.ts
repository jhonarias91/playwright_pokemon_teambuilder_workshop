import {Page, Locator} from '@playwright/test';

export class PokemonSearchPage{
    private readonly pokemonNameText : Locator;
    private readonly goToTeamButton : Locator;

    constructor(public page: Page){
        this.pokemonNameText = this.page.locator('input[name="pokemon"]');        
        this.goToTeamButton = this.page.locator('button[name="back"]');
    }

    async searchPokemonByName(pokemonName: string){
        await this.pokemonNameText.pressSequentially(pokemonName, {delay:1});
    }

    async goToMoves(){
        await this.pokemonNameText.press('Enter');        
    }

    async goToteam(){
        await this.goToTeamButton.click();
    }
}