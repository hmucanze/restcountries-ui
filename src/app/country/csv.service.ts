import { Injectable } from '@angular/core';

import { ExportToCsv } from 'export-to-csv';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor() { }

  export(data: any[]) {
    const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'My Awesome CSV',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };
   
    const csvExporter = new ExportToCsv(options);

    csvExporter.generateCsv(data);
  }
}
