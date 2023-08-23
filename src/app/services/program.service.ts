import { Injectable } from '@angular/core';
import { Program } from '../models/program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  programs:Program[];
  constructor() {
    this.providePrograms();
  }

  providePrograms(){
    this.programs = [
      {id: 1, name: "Conservatory"},
      {id: 1, name: "Perperatory"},
      {id: 1, name: "School"},
    ]
  }

  getAll():Program[]{
    return this.programs;
  }
}
