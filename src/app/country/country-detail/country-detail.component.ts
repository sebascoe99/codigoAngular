import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
})
export class CountryDetailComponent implements OnInit {
  alpha3Code: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    // se carga countrySelected en base al código de la URL
    this.countryService.seeCountryDetail(
      this.activatedRoute.snapshot.params.alpha3Code
    );
  }

  get countrySelected() {
    return this.countryService.getCountrySelected;
  }
}
