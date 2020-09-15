import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CountryModule } from './country/country.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    InputTextModule,

    CoreModule,
    CountryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
