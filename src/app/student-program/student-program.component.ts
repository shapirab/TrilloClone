import { Component, OnInit } from '@angular/core';
import { Program } from '../models/program';
import { RegistrationStatus } from '../models/registrationStatus';
import { ProgramPriceList } from '../models/programPriceList';
import { InstrumentPriceList } from '../models/instrumentPriceList';

@Component({
  selector: 'app-student-program',
  templateUrl: './student-program.component.html',
  styleUrls: ['./student-program.component.css']
})
export class StudentProgramComponent implements OnInit {
  program: Program;
  registrationStatus: RegistrationStatus;
  programPriceList: ProgramPriceList;
  instrumentPriceList: InstrumentPriceList;
  programs: Program[];
  registrationStatuses: RegistrationStatus[];
  programPriceLists: ProgramPriceList[];
  instrumentPriceLists: InstrumentPriceList[];
  constructor() { }

  ngOnInit(): void {
  }

  onSave(value: any){
    console.log(value);
  }

}
