import { Injectable } from '@angular/core';
import { RegistrationStatus } from '../models/registrationStatus';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  //registrationStatuses: RegistrationStatus[];
  baseUrl: string = 'https://localhost:7231/api';
  studentID: number;
  constructor(private http:HttpClient, private activeRoute: ActivatedRoute) {
    //this.provideRegistrationStatuses();

   }

  //  provideRegistrationStatuses(){
  //   this.registrationStatuses = [
  //     {id: 1, name: 'registered', checked: false},
  //     {id: 2, name: 'accepted', checked: false},
  //     {id: 3, name: 'cancelled registration', checked: false},
  //   ]
  //  }

   getAll():Observable<RegistrationStatus[]>{
    //return this.registrationStatuses;
    return this.http.get<RegistrationStatus[]>(`${this.baseUrl}/RegistrationStatus`);
   }

   getRegistrationStatusById(id:number): Observable<RegistrationStatus>{
    return this.http.get<RegistrationStatus>(`${this.baseUrl}/RegistrationStatus/${id}`);
   }
}
