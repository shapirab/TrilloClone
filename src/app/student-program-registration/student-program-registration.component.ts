import { Component, OnInit } from '@angular/core';
import { ProgramPriceList } from '../models/programPriceList';
import { RegistrationStatus } from '../models/registrationStatus';
import { InstrumentType } from '../models/instrumentType';

@Component({
  selector: 'app-student-program-registration',
  templateUrl: './student-program-registration.component.html',
  styleUrls: ['./student-program-registration.component.css']
})
export class StudentProgramRegistrationComponent implements OnInit {
  programPriceList: ProgramPriceList;
  programPriceLists: ProgramPriceList[];
  registrationStatus: RegistrationStatus;
  registrationStatuses: RegistrationStatus[];

  studentInstrumentTypes: InstrumentType[];
  constructor() { }

  ngOnInit(): void {
  }

  onRegistrationSave(value:any){

  }
}
