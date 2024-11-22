import { Injectable } from '@angular/core';
import { Program } from '../models/program';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  baseUrl: string = 'https://localhost:7231/api';
  constructor(private http: HttpClient) {
  }

  getAll():Observable<Program[]>{
    return this.http.get<Program[]>(`${this.baseUrl}/programs`);
  }

  getProgramById(programId: number): Observable<Program>{
    return this.http.get<Program>(`${this.baseUrl}/programs/${programId}`);
  }

  getStudentPrograms(studentID:number):Observable<Program[]>{
    return this.http.get<Program[]>(`${this.baseUrl}/Stakeholders/programs/${studentID}`);
  }
}
