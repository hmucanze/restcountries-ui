import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Country } from './country/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countryUrl = 'https://restcountries.eu';

  constructor(private http: HttpClient) { }

  listar(): Promise<Array<Country>> {

    return this.http.get<Array<Country>>(`${this.countryUrl}/rest/v2/all`)
    .toPromise()
    .then(response => {
      const countries = response;

      return countries;
    })
  }
}
