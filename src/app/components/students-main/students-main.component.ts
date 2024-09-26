import { Component, OnInit } from '@angular/core';
import { AcademicYear } from 'src/app/models/academicYear';
import { Student } from 'src/app/models/student';
import { AcademicYearSelectorService } from 'src/app/services/academic-year-selector.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-main',
  templateUrl: './students-main.component.html',
  styleUrls: ['./students-main.component.css']
})
export class StudentsMainComponent implements OnInit {
  students: Student[] = [];
  academicYear:AcademicYear;
  constructor(private studentService: StudentService,
    private academicYearService: AcademicYearSelectorService) { }

  ngOnInit(): void {
  }

  filterByActiveStudents(isActive: boolean){
    this.academicYearService.getAcademicYear().subscribe({
      next: (res) => {
        console.log('in studemtsMainComponent entering filterByActiveStudents');
        console.log('response was: ', res);
        if(res != null){
          this.academicYear = res;
          console.log('academic year', this.academicYear);
          this.studentService.getStudentsByRegistrationStatus(this.academicYear.academicYearID, isActive)
          .subscribe({
            next: (res) => {
              console.log('in filterByActiveStudents, students response was', res);
              this.students = res;
              console.log(this.students);
            },
            error: err => console.log(err)
          });
        }
      },
      error: err => console.log(err)
    });
  }

}
