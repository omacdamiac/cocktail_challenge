import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FilterPipeModule } from "ngx-filter-pipe";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

//services
import { CocktailService } from "@services/cocktail.service";

//ROUTING CHILD
import { PagesRoutingModule } from './pages-routing.module';

//MATERIAL
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { HomeComponent } from "../pages/home/home.component";
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    DetailsComponent,
    PagesComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FilterPipeModule,
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  exports:[
    HomeComponent,
    ListComponent,
    DetailsComponent,
  ],
  providers:[CocktailService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class PagesModule { }
