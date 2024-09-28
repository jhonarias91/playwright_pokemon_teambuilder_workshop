import { Page, Locator } from '@playwright/test';


export class TeamBuilderPage{  
    private readonly btnNewTeam : Locator;

    constructor(public page: Page){
        this.btnNewTeam = this.page.getByRole('button', { name: 'New Team' });
    }

    async goToCreateTeam(){
        await this.btnNewTeam.click();
    }
}