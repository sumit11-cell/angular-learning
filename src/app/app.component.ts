import { Component, HostListener, Inject } from '@angular/core';
import { GlserviceService } from './glservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sumit';
  constructor(){
    console.log("You are in Component.ts");
  }
@HostListener('click', ['$event'])
onhostclick(event:Event){
  alert("this host is listening");

}
}
