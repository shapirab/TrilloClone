import { Injectable } from '@angular/core';
import { SchoolGrade } from '../models/schoolGrade';

@Injectable({
  providedIn: 'root'
})
export class SchoolGradesService {
  schoolGrades: SchoolGrade[];
  constructor() {
    this.provideTestSchoolGrades();
  }


  provideTestSchoolGrades(){
    this.schoolGrades = [
      { id: 1, schoolGrade: 'kindergarden'},
      { id: 2, schoolGrade: 'first'},
      { id: 3, schoolGrade: 'second'},
      { id: 4, schoolGrade: 'third'},
      { id: 5, schoolGrade: 'fourth'},
      { id: 6, schoolGrade: 'fifth'},
      { id: 7, schoolGrade: 'sixth'},
      { id: 8, schoolGrade: 'seventh'},
      { id: 9, schoolGrade: 'eighth'},
      { id: 10, schoolGrade: 'ninth'},
      { id: 11, schoolGrade: 'tenth'},
      { id: 12, schoolGrade: 'eleventh'},
      { id: 13, schoolGrade: 'twelveth'}
    ];
  }

  getAll(){
    return this.schoolGrades;
  }
}
