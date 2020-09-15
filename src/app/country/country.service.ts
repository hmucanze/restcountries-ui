import { Country } from './country/country';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class CountryFilter {
  region: string;
  name: string;
  itemsByPage = 10;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countryUrl = '';

  constructor(private http: HttpClient) { }

  pesquisar(): Promise<Array<Country>> {

    /*const params = new HttpParams();

    if(filter.region) {
      params.append('region', filter.region);
    }

    if(filter.name) {
      params.append('name', filter.name);
    }*/

    return this.http.get<Array<Country>>('https://restcountries.eu/rest/v2/all')
    .toPromise()
    .then(response => {
      const countries = response;

      return countries;
    })
  }
}
