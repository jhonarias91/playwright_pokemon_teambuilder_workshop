import { Page, Locator } from '@playwright/test';


export class MainPage{  
    private readonly teamBuilderBtn : Locator;

    constructor(public page: Page){
        this.teamBuilderBtn = this.page.getByRole('button', { name: 'Teambuilder' });
    }

    async goToTeamBuilder(){
        await this.teamBuilderBtn.click();
    }
}