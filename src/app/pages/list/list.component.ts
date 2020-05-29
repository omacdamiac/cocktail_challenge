import { Component, OnInit } from '@angular/core';
import { CocktailService } from "@services/cocktail.service";
import { iCocktail, iCategories, iIngredient, iAlcoholic, iGlasses } from "@models/cocktail";
import { FilterPipe } from "ngx-filter-pipe";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  optionsC:iCategories[];
  optionsG:iGlasses[];
  optionsI:iIngredient[];
  optionsA:iAlcoholic[];

  myDrinks: iCocktail[];
  txtInput: any = '';

  catFilter: iCategories = {strCategory: ''};
  glaFilter: iGlasses = {strGlass: ''};
  alcFilter: iAlcoholic = {strAlcoholic: ''};

  list:string = 'list';
  constructor(public _api: CocktailService, public filterPipe: FilterPipe){
    //console.log(filterPipe.transform(this.myDrinks, { strCategory: 'B'}));    
    // filterPipe.transform(this.myDrinks, { strGlass: 'B'});
  }

  ngOnInit() {
    this.getCategories();
    this.getGlasses();
    this.getIngredients();
    this.getAlcoholic();
  } 

  getDrink(name: string){
    return this._api.getAllDrinksName(name)
    .subscribe((response: iCocktail[]) => { this.myDrinks = response['drinks'] },
                (err: HttpErrorResponse) => { console.log(err.message) }
    )
  }

  searchDrinks(newValue: string){
    this.txtInput = newValue;
    if (this.txtInput == '') {
      this.list = '';
    }else{
      this.list = this.txtInput;
      this.getDrink(this.txtInput);
    }    
  }

  //CMB Select
  // getFilter(type: string){
  //   return this._api.createFilter(type)
  //   .subscribe(data => this.optionsC= data['drinks']);
  // }

  getCategories(){
    return this._api.getAllCategories()
    .subscribe((data: iCategories[]) => this.optionsC = data['drinks'],
                err => console.log('Error categories: '+ err)
    );
  }

  getGlasses(){
    return this._api.getAllGlasses()
    .subscribe((data: iGlasses[]) => this.optionsG = data['drinks'],
    err => console.log('Error glasses: '+ err)
    );
  }

  getIngredients(){
    return this._api.getAllIngredients()
    .subscribe((data: iIngredient[]) => this.optionsI = data['drinks'],
    err => console.log('Error ingredients: '+ err)
    );
  }

  getAlcoholic(){
    return this._api.getAllAlcoholic()
    .subscribe((data: iAlcoholic[]) => this.optionsA = data['drinks'],
    err => console.log('Error alcoholic: '+ err)
    );
  }

}
