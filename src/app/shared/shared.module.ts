import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    NotfoundComponent,
    RouterModule
  ]
})
export class SharedModule { }