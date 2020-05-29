import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ROUTING
import { AppRoutingModule } from './app-routing.module';

//MODULES
import { PagesModule } from "./pages/pages.module";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
