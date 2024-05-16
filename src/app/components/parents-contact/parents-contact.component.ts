import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Parent } from 'src/app/models/parent';


@Component({
  selector: 'app-parents-contact',
  templateUrl: './parents-contact.component.html',
  styleUrls: ['./parents-contact.component.css']
})
export class ParentsContactComponent implements OnInit {
  @Input() parent: Parent;
  @Output() updatedParent = new EventEmitter<Parent>();

  constructor() { }

  ngOnInit(): void {
    if(!this.parent){
      this.parent = {
        israeliID: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        mainContactEmail: '',
        mainContactPhoneNumber: ''
      }
    }
  }

  onParentChange(parentValues: any): void {
    this.parent = parentValues;
    console.log(this.parent);
    this.updatedParent.emit(this.parent);
  }

}
