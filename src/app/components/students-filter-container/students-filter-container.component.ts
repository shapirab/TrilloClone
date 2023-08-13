import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { Program } from 'src/app/models/program';
import { RegistrationStatus } from 'src/app/models/registrationStatus';

@Component({
  selector: 'app-students-filter-container',
  templateUrl: './students-filter-container.component.html',
  styleUrls: ['./students-filter-container.component.css']
})
export class StudentsFilterContainerComponent implements OnInit {
  registrationStatusesLine: string = "";

  activeStudentsFilter = [
    { id: 1, name: 'active'},
    { id: 2, name: 'not active'}
  ];

  instrumentTypes = [
    { id: 1, name: 'violin'},
    { id: 2, name: 'viola'},
    { id: 3, name: 'Cello'},
    { id: 4, name: 'contrabass'}
  ];

  ranks = [
    {id: 1, name: "A"},
    {id: 2, name: "B"},
    {id: 3, name: "C"}
  ];

  years = [
    {id: 1, name: "1"},
    {id: 2, name: "2"},
    {id: 3, name: "3"},
    {id: 4, name: "4"},
    {id: 5, name: "5"},
    {id: 6, name: "6"}
  ];

  gradesInSchool = [
    {id: 1, name: "1"},
    {id: 2, name: "2"},
    {id: 3, name: "3"},
    {id: 4, name: "4"},
    {id: 5, name: "5"},
    {id: 6, name: "6"}
  ];

  departments: Department[] = [
    {id: 1, name: "Strings"},
    {id: 2, name: "Winds"},
    {id: 3, name: "Percussion"},
    {id: 4, name: "Theory"},
    {id: 5, name: "Piano"}

  ];

  programs: Program[] = [
    {id: 1, name: "Conservatory"},
    {id: 1, name: "Perperatory"},
    {id: 1, name: "School"},
  ];

  registrationStatusList : RegistrationStatus[] = [
    {id: 1, name: 'registered', checked: false},
    {id: 2, name: 'accepted', checked: false},
    {id: 3, name: 'cancelled registration', checked: false},
  ];

  selectedRegistrationStatuses: RegistrationStatus[] = [];
  constructor() {}

  ngOnInit(): void {
  }

  onFilter(values:any){

  }

  getSelectedRegistrationValue(registrationStatus: RegistrationStatus){
    this.registrationStatusesLine = "";
    this.addOrRemoveStatus(registrationStatus);
    this.selectedRegistrationStatuses.forEach(registrationStatus => {
      console.log(registrationStatus)
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
