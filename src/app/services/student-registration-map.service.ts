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
    console.log('studentRegistrationMapService::addStudentRegistrationStatus()');
    console.log('statement: ',`${this.baseUrl}/StudentRegistrationStatusForAcademicYear`, studentRegistrationStatusMap)
    return this.http.post<StudentRegistrationStatusInAcademicYear>
    (`${this.baseUrl}/StudentRegistrationStatusForAcademicYear`, studentRegistrationStatusMap);
  }

  updateStudentRegistrationStatus(mapID: number, studentRegistrationStatusMap: StudentRegistrationStatusInAcademicYear){
    // console.log('studentRegistrationMapService::updateStudentRegistrationStatus(). mapId: ',mapID);
    // console.log('studentRegistrationMapService::updateStudentRegistrationStatus(). studentRegistrationStatusMap: '
    //   ,studentRegistrationStatusMap);
    return this.http.put<StudentRegistrationStatusInAcademicYear>
    (`${this.baseUrl}/StudentRegistrationStatusForAcademicYear/${mapID}`, studentRegistrationStatusMap);
  }
}
