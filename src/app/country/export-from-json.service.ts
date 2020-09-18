import { Country } from './country/country';
import { Injectable } from '@angular/core';
import exportFromJSON from 'export-from-json';

@Injectable({
  providedIn: 'root'
})
export class ExportFromJsonService {

  constructor() { }

  export(data: Array<Country>, fileName: string, exportType: any) {
    /*const data = dados
    const fileName = nomeFicheiro
    const exportType = tipoExportado */

    exportFromJSON({ data, fileName, exportType });
  }
}
