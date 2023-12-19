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
  BirthDate: string;
  Address: string;
  City: string;
  MainContactPhone: string;
  MainContactEmail: string;


  constructor(private service: StudentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.studentId = +params['id'];
        this.loadStudent();

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
    }
  }

  onSave(value: any){

  }

}
