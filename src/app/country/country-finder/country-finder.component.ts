import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country-finder',
  templateUrl: './country-finder.component.html',
})
export class CountryFinderComponent implements OnInit {
  constructor(private countryService: CountryService) {}

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {}

  searchCountry() {
    const searchValue = this.txtSearch.nativeElement.value;

    if (searchValue.trim().length == 0) {
      this.countryService.fetchCountries();
      return;
    }
    this.countryService.searchCountry(searchValue);
  }
}
