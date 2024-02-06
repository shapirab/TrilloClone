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
        emailAddress: '',
        CellPhoneNumber: ''
      }
    }
  }

  onParentChange(): void {
    console.log('parent onParentChange() called');
    this.updatedParent.emit(this.parent);
  }

}
