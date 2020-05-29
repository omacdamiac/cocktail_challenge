import { Injectable } from '@angular/core';
import { iCocktail, iCategories, iGlasses, iIngredient, iAlcoholic } from "@models/cocktail";
import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  myDrink: any;
  url = environment.urlApi;;
  constructor( public _http: HttpClient){}

  getAllDrinks(): Observable<iCocktail[]>{
    let url_api = `${this.url}search.php?s=Margarita`;
    return this._http.get<iCocktail[]>(url_api);
  }

  getAllDrinksName(strDrink: string): Observable<iCocktail[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let url_api =`${this.url}search.php?s=${strDrink}`;
    return this._http.get<iCocktail[]>(url_api);
  }

  getDrinkId(idDrink: number): Observable<iCocktail>{
    let url_api =`${this.url}lookup.php?i=${idDrink}`;
    // return (this.myDrink = this._http.get<iCocktail>(url_api));
    return this._http.get<iCocktail>(url_api);
  }

  //CMB
  // createFilter(type: string){
  //   return this._http.get(`${this.url}list.php?${type}=list`); 
  // }
  
  getAllCategories():Observable<iCategories[]>{
    let url_api = `${this.url}list.php?c=list`;
    return this._http.get<iCategories[]>(url_api); 
  }

  getAllGlasses():Observable<iGlasses[]>{
    let url_api = `${this.url}list.php?g=list`;
    return this._http.get<iGlasses[]>(url_api);
  }

  getAllIngredients():Observable<iIngredient[]>{
    let url_api = `${this.url}list.php?i=list`;
    return this._http.get<iIngredient[]>(url_api);
  }

  getAllAlcoholic():Observable<iAlcoholic[]>{
    let url_api = `${this.url}list.php?a=list`;
    return this._http.get<iAlcoholic[]>(url_api);
  }
}