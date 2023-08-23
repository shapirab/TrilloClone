import { Injectable, OnInit } from '@angular/core';
import { InstrumentType } from '../models/instrumentType';

@Injectable({
  providedIn: 'root'
})
export class InstrumentTypeService{
  instrumentTypes: InstrumentType[];
  constructor() {
    this.provideTestInstrumentTypes();
  }


  provideTestInstrumentTypes(){
    this.instrumentTypes = [
      { id: 1, name: 'violin'},
      { id: 2, name: 'viola'},
      { id: 3, name: 'Cello'},
      { id: 4, name: 'contrabass'}
    ];
  }

  getAll(){
    return this.instrumentTypes;
  }
}
