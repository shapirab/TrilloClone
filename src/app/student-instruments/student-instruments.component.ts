import { Component, OnInit } from '@angular/core';
import { InstrumentType } from '../models/instrumentType';
import { Rank } from '../models/rank';

@Component({
  selector: 'app-student-instruments',
  templateUrl: './student-instruments.component.html',
  styleUrls: ['./student-instruments.component.css']
})
export class StudentInstrumentsComponent implements OnInit {
  instrumentTypes: InstrumentType[];
  ranks: Rank[];
  startDate: Date;
  experience: number;
  constructor() {
    this.startDate = new Date();
  }

  ngOnInit(): void {
  }

  onSave(value: any){

  }

}
