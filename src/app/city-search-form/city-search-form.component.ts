import { ViewportScroller } from '@angular/common';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-city-search-form',
  templateUrl: './city-search-form.component.html',
  styleUrls: ['./city-search-form.component.css']
})
export class CitySearchFormComponent implements OnInit {

  queryLocation:string ;
  queryCountry:string ;
  Ville:string;
  Pays = 'FR';

  constructor() {}

  ngOnInit(): void {
  }
  
  public getInputData() {
    var queryLocation = this.Ville;    
    var queryCountry = this.Pays;

    console.log(queryLocation + " " + queryCountry)
  };
}

export var queryLocation: string;
export var queryCountry: string;
