import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Parent } from 'src/app/models/parent';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-contact',
  templateUrl: './student-contact.component.html',
  styleUrls: ['./student-contact.component.css']
})
export class StudentContactComponent implements OnInit {
  studentId: number;
  israeliID: string;
  FirstName: string;
  LastName: string;
  BirthDate: Date;
  Address: string;
  City: string;
  MainContactPhone: string;
  MainContactEmail: string;

  isNewStudent: boolean = false;

  parent1: Parent;
  parent2: Parent;

  isParent1New = true;
  isParent2New = true;


  constructor(private service: StudentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.studentId = +params['id'];

      if(this.studentId){
        this.loadStudent();
      }
      else{
        this.isNewStudent = true;
      }
      this.getStudentParents(this.studentId);
    });
  }

  loadStudent(){
    this.service.getStudentById(this.studentId).subscribe((student) => {
      this.populateForm(student);
    });
  }

  populateForm(student: Student){
    if(student){
      this.israeliID = student.israeliID;
      this.FirstName = student.firstName;
      this.LastName = student.lastName;
      this.MainContactEmail = student.mainContactEmail;
      this.MainContactPhone = student.mainContactPhoneNumber;
      this.Address = student.address;
      this.City = student.city;
      this.BirthDate = student.dateOfBirth;
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  }

  onSave(value: any){
    this.isNewStudent ? this.createNewStudent(value) : this.updateStudent();
    //this.addStudentParents();
  }

  createNewStudent(value: any){
    console.log('creating new student');
    console.log(value);
    this.service.saveStudent(value);

  }

  updateStudent(){}

  //TODO: implement
  updateStudentParent(parent:Parent){
    console.log('current parents:');
    console.log(this.parent1);
    console.log(this.parent2);

    if(this.parent1){
      this.isParent1New = false;
    }

    parent.lastName = this.LastName;
    parent.address = this.Address;
    console.log('updated parent: ')
    console.log(parent);
    
    this.parent1 = parent;
  }


  addStudentParent(parent:Parent){
    this.service.addStudentParent(parent, this.studentId);
  }

  getStudentParents(studentId: number){
    this.service.getStudentParents(studentId).subscribe({
      next: parentsRes => {
        let parents: Parent[] = parentsRes;
        this.parent1 = parents[0];
        this.parent2 = parents[1]
      },
      error: err => console.log(err)
    });
  }
}
