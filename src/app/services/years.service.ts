import { Injectable } from '@angular/core';
import { YearInSchool } from '../models/yearInSchool';

@Injectable({
  providedIn: 'root'
})
export class YearsService {
  yearsInSchool: YearInSchool[];
  constructor() {
    this.provideTestYearsInSchool();
  }


  provideTestYearsInSchool(){
    this.yearsInSchool = [
      { id: 1, numOfYearsInSchool: 1},
      { id: 2, numOfYearsInSchool: 2},
      { id: 3, numOfYearsInSchool: 3},
      { id: 4, numOfYearsInSchool: 4},
      { id: 5, numOfYearsInSchool: 5},
      { id: 6, numOfYearsInSchool: 6},
      { id: 7, numOfYearsInSchool: 7},
      { id: 8, numOfYearsInSchool: 8},
      { id: 9, numOfYearsInSchool: 9},
      { id: 10, numOfYearsInSchool: 10},
      { id: 11, numOfYearsInSchool: 11},
      { id: 12, numOfYearsInSchool: 12}

    ];
  }

  getAll(){
    return this.yearsInSchool;
  }
}
