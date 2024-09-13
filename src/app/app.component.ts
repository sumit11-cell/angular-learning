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

  // name='batmaan';
  // message='welcome home';
}
