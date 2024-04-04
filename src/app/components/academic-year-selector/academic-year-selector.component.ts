import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AcademicYear } from 'src/app/models/academicYear';
import { AcademicYearsService } from 'src/app/services/academic-years.service';

@Component({
  selector: 'app-academic-year-selector',
  templateUrl: './academic-year-selector.component.html',
  styleUrls: ['./academic-year-selector.component.css']
})
export class AcademicYearSelectorComponent implements OnInit {
  @Output() academicYear = new EventEmitter<AcademicYear>();
  academicYears: AcademicYear[];
  selectedYear: AcademicYear;

  constructor(private academicYearService: AcademicYearsService) { }

  ngOnInit(): void {
    this.populateAcademicYears();
    this.academicYearService.getAcademicYearByIdAsync(1).subscribe({
      next: (res) => {
        this.selectedYear = res;
      }
    });
  }

  populateAcademicYears(){
    this.academicYearService.getAllAsync().subscribe({
      next: (response) => {
        this.academicYears = response;
      },
      error: err => console.log(err)
    });
  }

  submitSelectedYear(){
    this.academicYear.emit(this.selectedYear);
  }
}

