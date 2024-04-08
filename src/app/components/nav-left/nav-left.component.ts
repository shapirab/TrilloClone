import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AcademicYear } from 'src/app/models/academicYear';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.css']
})
export class NavLeftComponent implements OnInit {
  @Output() academicYear = new EventEmitter<AcademicYear>();
  academicYearSelection: AcademicYear;
  constructor() { }

  ngOnInit(): void {
  }

  setAcademicYear(selectedAcademicYear: AcademicYear){
    console.log('from nav: ');
    console.log(selectedAcademicYear.academicYearName);
    this.academicYearSelection = selectedAcademicYear;
    console.log(this.academicYearSelection)
    this.academicYear.emit(selectedAcademicYear);
  }

}
