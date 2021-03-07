import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CountryDetailComponent } from './country/country-detail/country-detail.component';
import { CountryListComponent } from './country/country-list/country-list.component';

const routes: Routes = [
  {
    path: '',
    component: CountryListComponent,
  },
  {
    path: 'country-detail/:alpha3Code',
    component: CountryDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
