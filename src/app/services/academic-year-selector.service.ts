import { Injectable } from '@angular/core';
import { AcademicYear } from '../models/academicYear';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcademicYearSelectorService {

  constructor() { }
  private academicYearSubject = new BehaviorSubject<AcademicYear | null>(null);

  setAcademicYear(academicYear: AcademicYear): void {
    this.academicYearSubject.next(academicYear);
  }

  getAcademicYear(): Observable<AcademicYear | null> {
    return this.academicYearSubject.asObservable();
  }
}
