import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parent } from '../models/parent';
import { StudentRegistrationStatusInAcademicYear } from '../models/studentRegistrationStatusInAcademicYear';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  //students: Student[];
  baseUrl: string = 'https://localhost:7231/api';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseUrl}/stakeholders/students`);
  }

  getStudentById(id: number): Observable<Student>{
    return this.http.get<Student>(`${this.baseUrl}/stakeholders/${id}`);
  }

  getStudentsByRegistrationStatus(academicYearId:number, isActive:boolean): Observable<Student[]>{
    return this.http.get<Student[]>
    (`${this.baseUrl}/stakeholders/studentsregistration/${academicYearId}/${isActive}`);
  }

  getStudentParents(studentId: number): Observable<Parent[]>{
    return this.http.get<Parent[]>(`${this.baseUrl}/stakeholders/parents/${studentId}`);
  }

  getStudentRegistrationStatus(studentId: number, academicYearId: number){
    return this.http.get<StudentRegistrationStatusInAcademicYear>
    (`${this.baseUrl}/stakeholders/studentregistration/${studentId}/${academicYearId}`);
  }

  // getStudentsByFilter(filter: Record<string, any>):Student[]{
  //   console.log(filter);
  //   this.students = this.students.filter((student: Student) => {
  //    //iterate through filter. If filter is not empty, and students.filter...
  //    for (var key in filter) {
  //     if (this.students[key] !== '' || this.students[key] !== filter[key])
  //       return false;
  //   }
  //   return true;
  //   });
  //   return this.students;
  // }

  getStudentsByFilter(filter: any): Student[] {
    //This cannot be done on angular. The criteria are not members of the Student,
    //and involve multiple tables querry. This must be an http call to GetStudentsByCriteria
    //on an api controller
    //this.students = this.students.filter((student: Student) => {});
    // console.log(Object.entries(filter));
    // return this.students;
    let students: Student[] = [];

    this.getAll().subscribe(res => {
      students = res.filter(s => s.firstName.includes(filter) || s.lastName.includes(filter));
    });
    return students;
  }

  saveStudent(student: Student){
    this.http.post(`${this.baseUrl}/stakeholders/students`, student)
    .subscribe((res) => {
      //no op...
    });
  }

  addStudentParent(parent: Parent, studentID: number){
    this.http.post(`${this.baseUrl}/stakeholders/parent/${studentID}`, parent)
    .subscribe((res) => {
      //no op...
    });
  }

  updateStudentParent(parentToUpdateId: Number, updatedParent: Parent){
    this.http.put(`${this.baseUrl}/stakeholders/parent/${parentToUpdateId}`, updatedParent)
    .subscribe((res) => {
      //no op...
    });
  }
}
