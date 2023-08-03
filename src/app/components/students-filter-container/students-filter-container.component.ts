import { Component, OnInit } from '@angular/core';
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
