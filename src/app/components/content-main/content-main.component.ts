import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AcademicYear } from 'src/app/models/academicYear';

@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.css']
})
export class ContentMainComponent implements OnInit {
  @Input() academicYear: AcademicYear;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
