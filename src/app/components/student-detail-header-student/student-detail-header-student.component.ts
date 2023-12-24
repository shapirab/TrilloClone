import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-detail-header-student',
  templateUrl: './student-detail-header-student.component.html',
  styleUrls: ['./student-detail-header-student.component.css']
})
export class StudentDetailHeaderStudentComponent implements OnInit {

  @Input() student: Student;
  constructor() {
    console.log(this.student);
  }

  ngOnInit(): void {
    console.log(this.student);
  }

}
