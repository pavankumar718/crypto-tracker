import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  selectedCurrency : string="INR";

  constructor(){
    console.log("event");  
    }
    sendCurrency(event: string){
      console.log(event);    
  }
}


