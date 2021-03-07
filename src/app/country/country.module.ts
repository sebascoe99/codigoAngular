import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryFinderComponent } from './country-finder/country-finder.component';

@NgModule({
  declarations: [
    CountryListComponent,
    CountryDetailComponent,
    CountryFinderComponent,
  ],
  imports: [CommonModule],
  exports: [
    CountryListComponent,
    CountryDetailComponent,
    CountryFinderComponent,
  ],
})
export class CountryModule {}
