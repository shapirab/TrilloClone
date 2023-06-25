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
        gradeInSchool: '1'
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
        gradeInSchool: '1'
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
        gradeInSchool: '1'
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
        gradeInSchool: '1'
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
        gradeInSchool: '1'
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
        gradeInSchool: '1'
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
        gradeInSchool: '1'
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
        gradeInSchool: '1'
      }
    ]
  }

  getAll(){
    return this.students;
  }
}
