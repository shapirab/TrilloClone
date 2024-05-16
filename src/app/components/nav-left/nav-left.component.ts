import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AcademicYear } from 'src/app/models/academicYear';
import { AcademicYearSelectorService } from 'src/app/services/academic-year-selector.service';
import { AcademicYearsService } from 'src/app/services/academic-years.service';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.css']
})
export class NavLeftComponent implements OnInit {
  @Output() academicYear = new EventEmitter<AcademicYear>();
  academicYearSelection: AcademicYear;
  constructor(private academicYearSelectorService: AcademicYearSelectorService) { }

  ngOnInit(): void {
  }

  // setAcademicYear(selectedAcademicYear: AcademicYear){
  //   console.log('from nav: ');
  //   console.log(selectedAcademicYear.academicYearName);
  //   this.academicYearSelection = selectedAcademicYear;
  //   console.log(this.academicYearSelection)
  //   this.academicYear.emit(selectedAcademicYear);
  // }
  emitAcademicYear(selectedAcademicYear:AcademicYear){
    this.academicYearSelectorService.setAcademicYear(selectedAcademicYear);
  }

}
