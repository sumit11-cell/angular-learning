import { Component, Directive, HostListener, Inject } from '@angular/core';
import { GlserviceService } from './glservice.service';
import { NgFor } from '@angular/common';
import { style } from '@angular/animations';
import { car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // userLoggedIn:boolean = false;
  // cars:Array<string>=["BMW","AUDI","TESLA"];
  title = 'Learning';
btnclick(){
  prompt("Enter any number");
};
//   constructor(){
//     console.log("You are in Component.ts");
//   }
// @HostListener('click', ['$event'])
// onhostclick(event:Event){
//   alert("this host is listening");

// }

// cars:Array<car>=[
//   {name:"bmw",colour:"red",speed:200},
//   {name:"audi",colour:"red",speed:200},
//   {name:"tesla",colour:"red",speed:200}
// ];

// colorFlag:boolean=false;
// getcolor(){
//   if(this.colorFlag){
//     return "red";
//   }
//   else{
//     return "blue"
//   }
// }

toHighlight:boolean=true;
highlightcolor(){
  return this.toHighlight;
}

}
