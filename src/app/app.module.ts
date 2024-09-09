import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlserviceService } from './glservice.service';
// import { YoutubeModule } from './youtube/youtube.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [GlserviceService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("you are in module.ts");
  }
}
