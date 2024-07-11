import { Injectable } from '@angular/core';
import { DataModel } from '../interface/data-model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  logMessage(): void {
    console.log('Test PDF Service is working');
  }

  getPDF(): string {
    return 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  }

  getData(): DataModel[] {
    return [
      {page: 1, key: 'key1', value: 'value1'},
      {page: 2, key: 'key2', value: 'value2'},
      {page: 3, key: 'key3', value: 'value3'},
    ];
  } 
}
