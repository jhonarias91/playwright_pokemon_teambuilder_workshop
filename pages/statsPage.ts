import {Page, Locator} from '@playwright/test';

export class StatPage{

    private evs = {}
    private remainingEvs : Locator;

    constructor(public page: Page, evsInputFieldsNames: { [key: string]: string }){
        
        for (let stat in evsInputFieldsNames) {
            this.evs[stat] = this.page.locator("input[name="+evsInputFieldsNames[stat]+"]");
        }   
        this.remainingEvs = this.page.locator(".totalev em"); 
    }

   async typeEvs(newEvs: { [key: string]: number }){
    for (let stat in newEvs) {          
           await this.evs[stat].pressSequentially(newEvs[stat] + "", {delay: 10});
       }
   }

   async getRemainingEvs():Promise<string>{
        return await this.remainingEvs.innerText();        
   }
}
    