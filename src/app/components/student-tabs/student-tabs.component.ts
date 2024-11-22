import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-tabs',
  templateUrl: './student-tabs.component.html',
  styleUrls: ['./student-tabs.component.css']
})
export class StudentTabsComponent implements OnInit {
  @Input() student: Student | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
