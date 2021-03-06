import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EventsComponent } from './events/events.component';
import { AptComponent } from './apt/apt.component';
import { ImagesComponent } from './inages/images.component';
import { TipulComponent } from './tipul/tipul.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    EventsComponent,
    AptComponent,
    ImagesComponent,
    TipulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
