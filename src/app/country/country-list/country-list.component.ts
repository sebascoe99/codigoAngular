import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryAPIInterface } from 'src/app/interfaces/country-api.interface';
import { CountryService } from '../services/country.service';
4;
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
})
export class CountryListComponent implements OnInit {
  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit(): void {
    this.fetchCountries();
  }

  get countryList() {
    return this.countryService.getCountryList;
  }

  goDetail(country: CountryAPIInterface) {
    this.router.navigateByUrl(`/country-detail/${country.alpha3Code}`);
  }

  fetchCountries() {
    this.countryService.fetchCountries();
  }
}
