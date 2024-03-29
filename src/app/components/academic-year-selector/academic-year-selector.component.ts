import { Component, OnInit } from '@angular/core';
import { AcademicYear } from 'src/app/models/academicYear';
import { AcademicYearsService } from 'src/app/services/academic-years.service';
import { YearsService } from 'src/app/services/years.service';

@Component({
  selector: 'app-academic-year-selector',
  templateUrl: './academic-year-selector.component.html',
  styleUrls: ['./academic-year-selector.component.css']
})
export class AcademicYearSelectorComponent implements OnInit {

  academicYears: AcademicYear[];
  selectedYear: AcademicYear;
  constructor(private academicYearService: AcademicYearsService) { }

  ngOnInit(): void {
    this.populateAcademicYears();
    this.academicYearService.getAcademicYearByIdAsync(1).subscribe({
      next: (res) => {
        this.selectedYear = res;
        console.log(this.selectedYear.academicYearName)
      }
    });
  }

  populateAcademicYears(){
    this.academicYearService.getAllAsync().subscribe({
      next: (response) => {
        this.academicYears = response;
        console.log(this.academicYears)
      },
      error: err => console.log(err)
    });
  }

  submitSelectedYear(){
    console.log(this.selectedYear);
  }
}

