import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  constructor(private service: StudentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.studentId = +params['id'];
      this.studentId ? this.loadStudent() : this.createStudent();
    });
  }

  loadStudent(){
    this.service.getStudentById(this.studentId).subscribe((student) => {
      this.populateForm(student);
    });
  }

  createStudent(){
    this.isNewStudent = true;
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

  onSave(value: any){
    this.isNewStudent ? this.createNewStudent(value) : this.updateStudent();
  }

  createNewStudent(value: any){
    console.log('creating new sutdent');
    console.log(value);
    this.service.saveStudent(value);

  }

  updateStudent(){}

}
