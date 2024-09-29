import {Page, Locator} from '@playwright/test';

export class MovePage{

    	
    private item: Locator;
    private ability: Locator;
    private moves: Locator [];
    private statsHeader : Locator;    

    constructor(public page: Page, moveInputFieldsNames: string[]){
        this.moves = [];
        for (let i = 0; i < moveInputFieldsNames.length; i++) {
            this.moves.push(this.page.locator('input[name="'+moveInputFieldsNames[i]+'"]'));
        }   
        this.statsHeader = this.page.locator("//button[@name='stats']/span[@class='statrow']/label[contains(text(), 'HP')]") ;   
        this.item = this.page.locator('input[name="item"]');
        this.ability = this.page.locator('input[name="ability"]');
    }
    
    async enterItem(itemName: string){
        await this.item.clear();
        await this.item.pressSequentially(itemName, {delay:2});
    }

    async enterAbility(abilityName: string){
        await this.ability.clear();
        await this.ability.pressSequentially(abilityName, {delay:2});
    }

   async typeMoves(moves: string[]){
       for (let i = 0; i < moves.length; i++) {
           //await this.moves[i].pressSequentially(moves[i], {delay: 2}); No need to use pressSequentially
           await this.moves[i].fill(moves[i]);
       }
   }

   async goToStats(){   
        await this.statsHeader.click();
   }
       
}