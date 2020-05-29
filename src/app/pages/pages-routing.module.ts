import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path:'',
    component: PagesComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'lista', component: ListComponent},
      // {path: 'detalle', component: DetailsComponent},
      {path: 'detalle/:id', component: DetailsComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
