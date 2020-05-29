import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CocktailService } from "@services/cocktail.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
myDrink:any;
  constructor(public _api:CocktailService, public router: ActivatedRoute) { }

  ngOnInit() {
    setTimeout(() => {
      this.getDetails();
    }, 1000);
  }

  getDetails(){
    const id = +this.router.snapshot.paramMap.get('id');
    this._api.getDrinkId(id).subscribe(data => this.myDrink = data['drinks'])
  }

}
