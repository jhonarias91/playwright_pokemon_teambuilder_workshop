import {Page, Locator} from '@playwright/test';

export class MovePage{

    private moves: Locator [];
    private statsHeader : Locator;

    constructor(public page: Page, moveInputFieldsNames: string[]){
        this.moves = [];
        for (let i = 0; i < moveInputFieldsNames.length; i++) {
            this.moves.push(this.page.locator('input[name="'+moveInputFieldsNames[i]+'"]'));
        }   
        this.statsHeader = this.page.locator("//button[@name='stats']/span[@class='statrow']/label[contains(text(), 'HP')]") ;   
    }

   async typeMoves(moves: string[]){
       for (let i = 0; i < moves.length; i++) {
           await this.moves[i].pressSequentially(moves[i], {delay: 10});
       }
   }

   async goToStats(){   
        await this.statsHeader.click();
   }
       
}