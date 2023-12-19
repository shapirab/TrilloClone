import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  //students: Student[];
  baseUrl: string = 'https://localhost:7231/api';
  constructor(private http: HttpClient) {
    //this.provideTestStudents();
  }

  // provideTestStudents(){
  //   this.students = [
  //     {
  //       id: 1,
  //       firstName: 'Yami',
  //       lastName: 'Shapira',
  //       mainEmail: 'some@email.com',
  //       mainMobile: '050-2223336',
  //       registrationStatusID: 1,
  //       houseID: 1,
  //       numberOfFamilyMembers: 3,
  //       gradeInSchool: '1',
  //       program: {id: 1, name: "Conservatory"}
  //     },
  //     {
  //       id: 2,
  //       firstName: 'Yocheved',
  //       lastName: 'Stam',
  //       mainEmail: 'some@email.com',
  //       mainMobile: '050-2223336',
  //       registrationStatusID: 1,
  //       houseID: 1,
  //       numberOfFamilyMembers: 3,
  //       gradeInSchool: '1',
  //       program: {id: 1, name: "Conservatory"}
  //     },
  //     {
  //       id: 3,
  //       firstName: 'Narmer',
  //       lastName: 'Pharo',
  //       mainEmail: 'some@email.com',
  //       mainMobile: '050-2223336',
  //       registrationStatusID: 1,
  //       houseID: 1,
  //       numberOfFamilyMembers: 3,
  //       gradeInSchool: '1',
  //       program: {id: 1, name: "Conservatory"}
  //     },
  //     {
  //       id: 4,
  //       firstName: 'Some',
  //       lastName: 'Student',
  //       mainEmail: 'some@email.com',
  //       mainMobile: '050-2223336',
  //       registrationStatusID: 1,
  //       houseID: 1,
  //       numberOfFamilyMembers: 3,
  //       gradeInSchool: '1',
  //       program: {id: 1, name: "Conservatory"}
  //     },
  //     {
  //       id: 5,
  //       firstName: 'Just',
  //       lastName: 'Name',
  //       mainEmail: 'some@email.com',
  //       mainMobile: '050-2223336',
  //       registrationStatusID: 1,
  //       houseID: 1,
  //       numberOfFamilyMembers: 3,
  //       gradeInSchool: '1',
  //       program: {id: 1, name: "Conservatory"}
  //     },
  //     {
  //       id: 6,
  //       firstName: 'Gaston',
  //       lastName: 'Handsome',
  //       mainEmail: 'some@email.com',
  //       mainMobile: '050-2223336',
  //       registrationStatusID: 1,
  //       houseID: 1,
  //       numberOfFamilyMembers: 3,
  //       gradeInSchool: '1',
  //       program: {id: 1, name: "Conservatory"}
  //     },
  //     {
  //       id: 7,
  //       firstName: 'Alibaba',
  //       lastName: 'Thief',
  //       mainEmail: 'some@email.com',
  //       mainMobile: '050-2223336',
  //       registrationStatusID: 1,
  //       houseID: 1,
  //       numberOfFamilyMembers: 3,
  //       gradeInSchool: '1',
  //       program: {id: 1, name: "Conservatory"}
  //     },
  //     {
  //       id: 8,
  //       firstName: 'Barabash',
  //       lastName: 'Partzifloch',
  //       mainEmail: 'some@email.com',
  //       mainMobile: '050-2223336',
  //       registrationStatusID: 1,
  //       houseID: 1,
  //       numberOfFamilyMembers: 3,
  //       gradeInSchool: '1',
  //       program: {id: 1, name: "Conservatory"}
  //     }
  //   ]
  // }

  getAll(): Observable<Student[]>{
    //return this.students;
    return this.http.get<Student[]>(`${this.baseUrl}/stakeholders/students`);
  }

  getStudentById(id: number): Observable<Student>{
    //return this.students.filter(student => student.id === id)[0];
    return this.http.get<Student>(`${this.baseUrl}/stakeholders/${id}`);
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
}
