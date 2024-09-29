import { Page, Locator } from '@playwright/test';


export class TeamBuilderPage{  
    private  btnNewTeam : Locator;
    private  selectFormat : Locator;
    private  selectFormatOption : Locator;
    private btnTeamFormat: Locator;
    private btnAddPokemon: Locator;
    private  btnValidate : Locator;
    private popUpvalidate: Locator;

    constructor(public page: Page){
        this.btnNewTeam = this.page.getByRole('button', { name: 'New Team' });
        this.selectFormat = page.getByRole('button', {name:'format'});
        this.selectFormatOption = page.getByPlaceholder('Search formats');
        this.btnTeamFormat = page.locator("body > div.ps-popup > span > ul > details > li > button")
        this.btnAddPokemon = page.getByRole('button', { name: ' Add Pokémon' });
        this.btnValidate = page.locator("button[name='validate']");
        this.popUpvalidate = page.locator("body > div.ps-overlay > div > form > p:nth-child(1)");
    }

    async goToCreateTeam(){
        await this.btnNewTeam.click();
    }

    async chooseAFormat(format: string){    
            await this.selectFormat.click();
            await this.selectFormatOption.pressSequentially(format, {delay: 1});            
            await this.btnTeamFormat.click();       
    }

    async goToAddNewPokemon(){
        await this.btnAddPokemon.click();
    }

    async validateTeam(){
        await this.btnValidate.click();
        
        await this.page.waitForSelector("body > div.ps-overlay > div > form > p:nth-child(1)", { state: 'visible' });
    }

    async getPopUpText():Promise<string>{
        return await this.popUpvalidate.innerText();
    }

}