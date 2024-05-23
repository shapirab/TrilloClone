import { Injectable } from '@angular/core';
import { Program } from '../models/program';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  //programs:Program[];
  baseUrl: string = 'https://localhost:7231/api';
  constructor(private http: HttpClient) {
    //this.providePrograms();
  }

  // providePrograms(){
  //   this.programs = [
  //     {id: 1, name: "Conservatory"},
  //     {id: 1, name: "Perperatory"},
  //     {id: 1, name: "School"},
  //   ]
  // }

  getAll():Observable<Program[]>{
    return this.http.get<Program[]>(`${this.baseUrl}/programs`);
  }
}
