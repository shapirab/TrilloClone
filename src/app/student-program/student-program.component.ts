import { Component, OnInit } from '@angular/core';
import { Program } from '../models/program';
import { RegistrationStatus } from '../models/registrationStatus';
import { ProgramPriceList } from '../models/programPriceList';
import { InstrumentPriceList } from '../models/instrumentPriceList';
import { ProgramService } from '../services/program.service';
import { error } from 'console';

@Component({
  selector: 'app-student-program',
  templateUrl: './student-program.component.html',
  styleUrls: ['./student-program.component.css']
})
export class StudentProgramComponent implements OnInit {
  studentProgram: Program;
  registrationStatus: RegistrationStatus;
  programPriceList: ProgramPriceList;
  instrumentPriceList: InstrumentPriceList;
  programs: Program[];
  registrationStatuses: RegistrationStatus[];
  programPriceLists: ProgramPriceList[];
  instrumentPriceLists: InstrumentPriceList[];
  constructor(private programService: ProgramService) { }

  ngOnInit(): void {
    this.programService.getAll().subscribe({
      next: res => this.programs = res,
      error: err => console.log(err)
    });
  }

  onSave(value: any){
    console.log(value);
  }

}
