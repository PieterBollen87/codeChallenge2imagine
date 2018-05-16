import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {weatherService} from "../services/weatherService";
import {clothingService} from "../services/clothingService";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  weatherService,
  clothingService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
