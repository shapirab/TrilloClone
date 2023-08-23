import { Injectable } from '@angular/core';
import { RegistrationStatus } from '../models/registrationStatus';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  registrationStatuses: RegistrationStatus[];
  constructor() {
    this.provideRegistrationStatuses();
   }

   provideRegistrationStatuses(){
    this.registrationStatuses = [
      {id: 1, name: 'registered', checked: false},
      {id: 2, name: 'accepted', checked: false},
      {id: 3, name: 'cancelled registration', checked: false},
    ]
   }

   getAll():RegistrationStatus[]{
    return this.registrationStatuses;
   }
}
