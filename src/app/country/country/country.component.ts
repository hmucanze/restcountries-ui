import { Component, OnInit } from '@angular/core';
import { Country } from './country';

import { ExcelService } from './../excel.service';
import { CountryService } from './../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries: Array<Country>;

  constructor(
    private countryService: CountryService,
    private excelService: ExcelService
    ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.countryService.pesquisar()
    .then(countries => {
      this.countries = countries;
    })
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.countries, 'countries');
 }

}
