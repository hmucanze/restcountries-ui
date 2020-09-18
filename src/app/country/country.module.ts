import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { CountryService } from './country.service';
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [ CountryComponent ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    ButtonModule,
    DialogModule,
    InputTextModule,
    TableModule
  ],
  exports: [
    CountryComponent
  ],
  providers: [ 
    CountryService,
   ]
})
export class CountryModule { }
