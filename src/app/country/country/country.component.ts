import { Component, OnInit } from '@angular/core';

import { Country } from './country';
import { CountryService } from './../country.service';
import { ExportFromJsonService } from './../export-from-json.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries: Array<Country>;

  display: boolean = false;
  country: Country;

  constructor(
    private countryService: CountryService,
    private exportFromJSONService: ExportFromJsonService
    ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.countryService.listar()
    .then(countries => {
      this.countries = countries;
    })
  }

 export(data: Array<Country>, fileName, exportType) {
  this.exportFromJSONService.export(data,fileName,exportType);
 }

 showDialog(country: Country) {
   this.display = true;
   this.country = country;
 }

}
