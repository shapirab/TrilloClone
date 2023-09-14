import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[];
  constructor() {
    this.provideTestStudents();
  }

  provideTestStudents(){
    this.students = [
      {
        id: 1,
        firstName: 'Yami',
        lastName: 'Shapira',
        mainEmail: 'some@email.com',
        mainMobile: '050-2223336',
        registrationStatusID: 1,
        houseID: 1,
        numberOfFamilyMembers: 3,
        gradeInSchool: '1',
        program: {id: 1, name: "Conservatory"}
      },
      {
        id: 2,
        firstName: 'Yocheved',
        lastName: 'Stam',
        mainEmail: 'some@email.com',
        mainMobile: '050-2223336',
        registrationStatusID: 1,
        houseID: 1,
        numberOfFamilyMembers: 3,
        gradeInSchool: '1',
        program: {id: 1, name: "Conservatory"}
      },
      {
        id: 3,
        firstName: 'Narmer',
        lastName: 'Pharo',
        mainEmail: 'some@email.com',
        mainMobile: '050-2223336',
        registrationStatusID: 1,
        houseID: 1,
        numberOfFamilyMembers: 3,
        gradeInSchool: '1',
        program: {id: 1, name: "Conservatory"}
      },
      {
        id: 4,
        firstName: 'Some',
        lastName: 'Student',
        mainEmail: 'some@email.com',
        mainMobile: '050-2223336',
        registrationStatusID: 1,
        houseID: 1,
        numberOfFamilyMembers: 3,
        gradeInSchool: '1',
        program: {id: 1, name: "Conservatory"}
      },
      {
        id: 5,
        firstName: 'Just',
        lastName: 'Name',
        mainEmail: 'some@email.com',
        mainMobile: '050-2223336',
        registrationStatusID: 1,
        houseID: 1,
        numberOfFamilyMembers: 3,
        gradeInSchool: '1',
        program: {id: 1, name: "Conservatory"}
      },
      {
        id: 6,
        firstName: 'Gaston',
        lastName: 'Handsome',
        mainEmail: 'some@email.com',
        mainMobile: '050-2223336',
        registrationStatusID: 1,
        houseID: 1,
        numberOfFamilyMembers: 3,
        gradeInSchool: '1',
        program: {id: 1, name: "Conservatory"}
      },
      {
        id: 7,
        firstName: 'Alibaba',
        lastName: 'Thief',
        mainEmail: 'some@email.com',
        mainMobile: '050-2223336',
        registrationStatusID: 1,
        houseID: 1,
        numberOfFamilyMembers: 3,
        gradeInSchool: '1',
        program: {id: 1, name: "Conservatory"}
      },
      {
        id: 8,
        firstName: 'Barabash',
        lastName: 'Partzifloch',
        mainEmail: 'some@email.com',
        mainMobile: '050-2223336',
        registrationStatusID: 1,
        houseID: 1,
        numberOfFamilyMembers: 3,
        gradeInSchool: '1',
        program: {id: 1, name: "Conservatory"}
      }
    ]
  }

  getAll(){
    return this.students;
  }

  getStudentById(id: number): Student{
    return this.students.filter(student => student.id === id)[0];
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
    console.log(Object.entries(filter));
    return this.students;
  }

}
