import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CountryAPIInterface } from 'src/app/interfaces/country-api.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient, private router: Router) {}

  private countryList: CountryAPIInterface[] = [];

  private countrySelected: CountryAPIInterface = {
    name: '',
    alpha3Code: '',
    population: 0,
    capital: '',
    flag: '',
  };

  get getCountryList() {
    return this.countryList;
  }

  get getCountrySelected() {
    return this.countrySelected;
  }

  fetchCountries() {
    // console.log("fetching countries...")
    this.http
      .get<CountryAPIInterface[]>('https://restcountries.eu/rest/v2/all')
      .subscribe((res) => {
        this.countryList = res;
      });
  }

  searchCountry(searchValue: string) {
    this.http
      .get<CountryAPIInterface[]>(
        `https://restcountries.eu/rest/v2/name/${searchValue}`
      )
      .subscribe((res) => {
        this.countryList = res;
      });
  }

  seeCountryDetail(alpha3Code: string) {
    this.http
      .get<CountryAPIInterface>(
        `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
      )
      .subscribe((res) => {
        this.countrySelected = res;
      });

    // this.router.navigateByUrl(`/country-detail/${alpha3Code}`);
  }
}
