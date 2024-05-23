import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Department } from 'src/app/models/department';
import { InstrumentType } from 'src/app/models/instrumentType';
import { Rank } from 'src/app/models/rank';
import { Program } from 'src/app/models/program';
import { RegistrationStatus } from 'src/app/models/registrationStatus';
import { InstrumentTypeService } from 'src/app/services/instrument-type.service';
import { RanksService } from 'src/app/services/ranks.service';
import { YearInSchool } from 'src/app/models/yearInSchool';
import { YearsService } from 'src/app/services/years.service';
import { SchoolGrade } from 'src/app/models/schoolGrade';
import { SchoolGradesService } from 'src/app/services/school-grades.service';
import { DepartmentService } from 'src/app/services/department.service';
import { ProgramService } from 'src/app/services/program.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-filter-container',
  templateUrl: './students-filter-container.component.html',
  styleUrls: ['./students-filter-container.component.css']
})
export class StudentsFilterContainerComponent implements OnInit {
  @Output() isFilterByActiveStudents: EventEmitter<boolean> = new EventEmitter();

  registrationStatusesLine: string = "";

  activeStudentsFilter = [
    { id: 1, name: 'active'},
    { id: 2, name: 'not active'}
  ];

  instrumentTypes: InstrumentType[];
  ranks: Rank[];

  years:YearInSchool[];

  gradesInSchool: SchoolGrade[];

  departments: Department[];

  programs: Program[];

  registrationStatusList : RegistrationStatus[];

  selectedRegistrationStatuses: RegistrationStatus[] = [];

  constructor(private instrumentTypeService: InstrumentTypeService,
                  private ranksService: RanksService,
                  private yearsService: YearsService,
                  private schoolService: SchoolGradesService,
                  private departmentService: DepartmentService,
                  private programService: ProgramService,
                  private registrationService: RegistrationService,
                  private studentService: StudentService) {
    this.instrumentTypes = instrumentTypeService.getAll();
    this.ranks = ranksService.getAll();
    this.years = yearsService.getAll();
    this.gradesInSchool = schoolService.getAll();
    this.departments = departmentService.getAll();
    //this.programs = programService.getAll();
    this.registrationStatusList = registrationService.getAll();
  }

  ngOnInit(): void {
    this.getPrograms();
  }

  async getPrograms(){
    await this.programService.getAll().subscribe({
      next: programs => {
        this.programs = programs;
        console.log(programs)
      },
      error: err => console.log(err)
    });
  }

  onFilter(filter:any){
    if(filter.activeStudents == '1'){
      this.isFilterByActiveStudents.emit(true);
    }
    else if(filter.activeStudents === '2'){
      this.isFilterByActiveStudents.emit(false);
    }

  }

  getSelectedRegistrationValue(registrationStatus: RegistrationStatus){
    this.registrationStatusesLine = "";
    this.addOrRemoveStatus(registrationStatus);
    this.selectedRegistrationStatuses.forEach(registrationStatus => {
      this.registrationStatusesLine = this.registrationStatusesLine.concat(registrationStatus.name + ", ");
    });
  }

  addOrRemoveStatus(registrationStatus: RegistrationStatus){
    let isChecked = this.setRegistrationStatus(registrationStatus);

    if(isChecked){
      this.selectedRegistrationStatuses.push(registrationStatus);
    }
    else{
      this.removeSelectedStatus(registrationStatus);
    }
  }

  setRegistrationStatus(registrationStatus: RegistrationStatus){
    if(registrationStatus.checked){
      registrationStatus.checked = false;
      return false;
    }
    registrationStatus.checked = true;
    return true;
  }

  removeSelectedStatus(registrationStatus: RegistrationStatus){
    let index = this.selectedRegistrationStatuses.indexOf(registrationStatus);
    this.selectedRegistrationStatuses.splice(index, 1);
  }
}
