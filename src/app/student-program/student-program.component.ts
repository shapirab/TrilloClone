import { Component, Input, OnInit } from '@angular/core';
import { Program } from '../models/program';
import { RegistrationStatus } from '../models/registrationStatus';
import { ProgramPriceList } from '../models/programPriceList';
import { InstrumentPriceList } from '../models/instrumentPriceList';
import { ProgramService } from '../services/program.service';
import { error } from 'console';
import { Student } from '../models/student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-program',
  templateUrl: './student-program.component.html',
  styleUrls: ['./student-program.component.css']
})
export class StudentProgramComponent implements OnInit {
  studentId: number;
  studentPrograms: Program[];
  registrationStatus: RegistrationStatus;
  programPriceList: ProgramPriceList;
  instrumentPriceList: InstrumentPriceList;
  programs: Program[];
  registrationStatuses: RegistrationStatus[];
  programPriceLists: ProgramPriceList[];
  instrumentPriceLists: InstrumentPriceList[];
  constructor(private programService: ProgramService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.studentId = +params['id'];
    });
    this.programService.getAll().subscribe({
      next: res => this.programs = res,
      error: err => console.log(err)
    });
    this.programService.getStudentPrograms(this.studentId).subscribe({
      next: (res) => {
        this.studentPrograms = res;
      },
      error: err => console.log(err)
    });
  }

  onSave(value: any){
    console.log(value);
  }

}
