import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { CountryService } from './country.service';
import { CountryComponent } from './country/country.component';
import { ExcelService } from './excel.service';

@NgModule({
  declarations: [ CountryComponent ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    ButtonModule,
    InputTextModule,
    TableModule
  ],
  exports: [
    CountryComponent
  ],
  providers: [ 
    CountryService,
    ExcelService
   ]
})
export class CountryModule { }
