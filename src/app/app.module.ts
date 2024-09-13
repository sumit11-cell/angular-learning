import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule,routingcomponent } from './app-routing/app-routing.module';
// import { YoutubeModule } from './youtube/youtube.module';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("you are in module.ts");
  }
}
