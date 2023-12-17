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
  student: Student;
  israeliID: number;
  FirstName: string;
  LastName: string;
  BirthDate: string;
  Address: string;
  City: string;


  constructor(private service: StudentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.studentId = +params['id'];
        this.loadStudent();
        this.populateForm();
    });
  }

  loadStudent(){
    this.service.getStudentById(this.studentId).subscribe((res) => {
      console.log(res);
      this.student = res;
    });
  }

  populateForm(){
    if(this.student){
      this.israeliID = this.student.stakeholderID;
      this.FirstName = this.student.firstName;
      this.LastName = this.student.lastName;
    }
  }

  onSave(value: any){

  }

}
