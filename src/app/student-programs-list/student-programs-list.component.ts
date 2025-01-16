import { Component, Input, OnInit } from '@angular/core';
import { Program } from '../models/program';
import { ProgramService } from '../services/program.service';

@Component({
  selector: 'app-student-programs-list',
  templateUrl: './student-programs-list.component.html',
  styleUrls: ['./student-programs-list.component.css']
})
export class StudentProgramsListComponent implements OnInit {
  @Input() studentId: number;
  studentPrograms: Program[];
  constructor(private programService: ProgramService) { }

  ngOnInit(): void {
    this.programService.getStudentPrograms(this.studentId).subscribe({
      next: (res) => {
        //this.studentPrograms = res;
        if (res && res.length > 0) {
          this.studentPrograms = res;
        }
        else {
          console.log('No programs found for this student.');
        }
      },
      error: err => {
        if(err.status != '404'){
          console.log(err);
        }
        else{
          console.log('No programs found (404 error).');
        }
      }
    });
  }

}
