import { Page, Locator } from '@playwright/test';


export class TeamBuilderPage{  
    private  btnNewTeam : Locator;
    private  selectFormat : Locator;
    private  selectFormatOption : Locator;
    private btnTeamFormat: Locator;
    private btnAddPokemon: Locator;

    constructor(public page: Page){
        this.btnNewTeam = this.page.getByRole('button', { name: 'New Team' });
        this.selectFormat = page.getByRole('button', {name:'format'});
        this.selectFormatOption = page.getByPlaceholder('Search formats');
        this.btnTeamFormat = page.locator("//button[@name='selectFormat' and contains(text(), 'Ubers') and @value='gen9ubers']")
        this.btnAddPokemon = page.getByRole('button', { name: ' Add Pokémon' });
    }

    async goToCreateTeam(){
        await this.btnNewTeam.click();
    }

    async chooseAFormat(format: string){    
            await this.selectFormat.click();
            await this.selectFormatOption.pressSequentially(format, {delay: 200});
            await this.btnTeamFormat.click();       
    }

    async goToAddNewPokemon(){
        await this.btnAddPokemon.click();
    }

}