import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Country } from './country/country';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countryUrl : string;

  constructor(private http: HttpClient) {
    this.countryUrl = `${environment.countryUrl}/rest/v2`;
  }

  listar(): Promise<Array<Country>> {
    return this.http.get<Array<Country>>(`${this.countryUrl}/all`)
    .toPromise()
    .then(response => {
      const countries = response;

      return countries;
    })
  }
}
