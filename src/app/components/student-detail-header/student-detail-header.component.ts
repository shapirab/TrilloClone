import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-detail-header',
  templateUrl: './student-detail-header.component.html',
  styleUrls: ['./student-detail-header.component.css']
})
export class StudentDetailHeaderComponent implements OnInit {
  @Input() student: Student;
  constructor() { }

  ngOnInit(): void {
  }

}
