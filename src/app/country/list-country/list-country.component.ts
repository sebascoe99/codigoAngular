import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
})
export class ListCountryComponent implements OnInit {

  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
  }

  get listCountry() {
    return this.countryService.getListCountry;
  }
}
