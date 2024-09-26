import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentRegistrationStatusInAcademicYear } from '../models/studentRegistrationStatusInAcademicYear';
import { Observable } from 'rxjs';
import { StudentRegistrationStatusInAcademicYearDTO } from '../models/studentRegistrationStatusInAcademicYearDTO';

@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationMapService {
  baseUrl: string = 'https://localhost:7231/api';
  constructor(private http: HttpClient) { }

  getStudentRegistrationStatus(studentId: number, academicYearId: number)
  :Observable<StudentRegistrationStatusInAcademicYear>{
    return this.http.get<StudentRegistrationStatusInAcademicYear>
    (`${this.baseUrl}/StudentRegistrationStatusForAcademicYear/registrationMap/${studentId}/${academicYearId}`);
  }

  addStudentRegistrationStatus(studentRegistrationStatusMap: StudentRegistrationStatusInAcademicYearDTO){
    return this.http.post<StudentRegistrationStatusInAcademicYear>
    (`${this.baseUrl}/StudentRegistrationStatusForAcademicYear`, studentRegistrationStatusMap);
  }

  updateStudentRegistrationStatus(mapID: number, studentRegistrationStatusMap: StudentRegistrationStatusInAcademicYear){
    console.log('entering sutdentRegistrationMapService update method');
    console.log(mapID);
    console.log(studentRegistrationStatusMap);
    return this.http.put<StudentRegistrationStatusInAcademicYear>
    (`${this.baseUrl}/StudentRegistrationStatusForAcademicYear/${mapID}`, studentRegistrationStatusMap);
  }
}
