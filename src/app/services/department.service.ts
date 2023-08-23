import { Injectable } from '@angular/core';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departments: Department[];
  constructor() {
    this.provideDepartments();
   }

  provideDepartments(){
    this.departments = [
      {id: 1, name: "Strings"},
      {id: 2, name: "Winds"},
      {id: 3, name: "Percussion"},
      {id: 4, name: "Theory"},
      {id: 5, name: "Piano"}
    ]
  }

  getAll(): Department[]{
    return this.departments;
  }
}


