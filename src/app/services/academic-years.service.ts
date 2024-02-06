import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcademicYear } from '../models/academicYear';

@Injectable({
  providedIn: 'root'
})
export class AcademicYearsService {
  baseUrl: string = 'https://localhost:7231/api';
  constructor(private http: HttpClient) { }

  getAllAsync(): Observable<AcademicYear[]>{
    return this.http.get<AcademicYear[]>(`${this.baseUrl}/academicYears`);
  }

  getAcademicYearByIdAsync(id:number):Observable<AcademicYear>{
    return this.http.get<AcademicYear>(`${this.baseUrl}/academicYears/${id}`);
  }

  getActiveAcademicYearAsync(isActive: boolean):Observable<AcademicYear>{
    return this.http.get<AcademicYear>(`${this.baseUrl}/academicYears/activeYear/${isActive}`);
  }
}
