import { Component, OnInit } from '@angular/core';
import { ProgramPriceList, Type } from '../models/programPriceList';
import { RegistrationStatus } from '../models/registrationStatus';
import { InstrumentType } from '../models/instrumentType';
import { RegistrationService } from '../services/registration.service';
import { error } from 'console';
import { AcademicYearsService } from '../services/academic-years.service';
import { AcademicYear } from '../models/academicYear';
import { StudentRegistrationMapService } from '../services/student-registration-map.service';
import { ActivatedRoute } from '@angular/router';
import { StudentRegistrationStatusInAcademicYear } from '../models/studentRegistrationStatusInAcademicYear';
import { StudentRegistrationStatusInAcademicYearDTO } from '../models/studentRegistrationStatusInAcademicYearDTO';
import { ProgramPriceListService } from '../services/program-price-list.service';
import { Program } from '../models/program';
import { ProgramService } from '../services/program.service';

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
  currentStudentRegistrationStatus: RegistrationStatus = {
    id: -1,
    statusName: '',
    checked: false

  };

  studentID: number;
  selectedAcademicYear:AcademicYear;

  studentInstrumentTypes: InstrumentType[];
  constructor(private registrationService: RegistrationService,
              private academicYearService: AcademicYearsService,
              private studentRegistrationMapService: StudentRegistrationMapService,
              private priceListService: ProgramPriceListService,
              private programService: ProgramService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedAcademicYear = this.academicYearService.selectedAcademicYear;
    this.registrationService.getAll().subscribe({
      next: res => this.registrationStatuses = res,
      error: err => console.log('Error in getting all registration status types', err)
    });
    this.getStudentCurrentRegistrationStatus();

    this.priceListService.getAll().subscribe({
      next: res => {
        console.log(res);
        this.programPriceLists = res;
        this.programPriceLists.forEach(programPriceList => {
          this.programService.getProgramById(programPriceList.programID).subscribe({
            next: res => {
              programPriceList.program = res;
            },
            error: err => console.log('Error in getting the program', err)
          });
        });
      },
      error: err => console.log('Error in getting all the price lists', err)
    });
  }

  onRegistrationSave(value:any){
    if(this.activeRoute.parent){
      this.activeRoute.parent.params.subscribe(params => {
        let studentID = params['id'];
        this.studentRegistrationMapService
          .getStudentRegistrationStatus(studentID, this.selectedAcademicYear.academicYearID).subscribe({
            next: map => {
              if(map){
                //update
                let studentRegistrationMapUpdate : StudentRegistrationStatusInAcademicYear = {
                  id: map.id,
                  studentId: studentID,
                  registrationStatusID: value.registrationStatus,
                  academicYearID: map.academicYearID
                }

                this.studentRegistrationMapService
                .updateStudentRegistrationStatus(map.id, studentRegistrationMapUpdate).subscribe({
                  next: res => {
                    console.log(`registration map was updated, ${res}`)
                  },
                  error: err => console.log(err)
                });
              }
            },
            error: err => {
              if(err.status === 404){
                let map: StudentRegistrationStatusInAcademicYearDTO = {
                  studentId: studentID,
                  academicYearID: this.selectedAcademicYear.academicYearID,
                  registrationStatusID: value.registrationStatus
                }
                this.studentRegistrationMapService.addStudentRegistrationStatus(map).subscribe({
                  next: res => console.log(res),
                  error: err => console.log(err)
                });
              }
              else{
                console.log(`error: ${err.message}`)
              }
            }
          });
      });
    }
  }

  getStudentCurrentRegistrationStatus(){
    if(this.activeRoute.parent){
      this.activeRoute.parent.params.subscribe(params => {
         let studentID = params['id'];
         this.studentRegistrationMapService
        .getStudentRegistrationStatus(studentID, this.selectedAcademicYear.academicYearID).subscribe({
          next: map => {
            this.registrationService.getRegistrationStatusById(map.registrationStatusID).subscribe({
              next: registrationStatus => {
                if(registrationStatus){
                  this.currentStudentRegistrationStatus = registrationStatus;
                }
              },
              error: err => console.log('Error in getting studentRegistrationStatus map', err)
            })
          },
          error: err => console.log('Error in getting the registration status type', err)
        });
      });
    }
  }

  getTypeName(type: Type): string{
    return Type[type];
  }
}
