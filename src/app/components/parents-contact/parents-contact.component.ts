import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Parent } from 'src/app/models/parent';


@Component({
  selector: 'app-parents-contact',
  templateUrl: './parents-contact.component.html',
  styleUrls: ['./parents-contact.component.css']
})
export class ParentsContactComponent implements OnInit {
  @Input() parent?: Parent;
  israeliId: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  mainContactEmail: string | undefined;
  mainPhoneNumber: string | undefined;
  @Output() updatedParent = new EventEmitter<Parent>();

  constructor() { }

  ngOnInit(): void {
    if(this.parent){
      console.log('parent was found.', this.parent)
      this.israeliId = this.parent.israeliID;
      this.firstName = this.parent.firstName;
      this.address = this.parent.address;
      this.city = this.parent.city;
      this.mainContactEmail = this.parent.mainContactEmail;
      this.mainPhoneNumber = this.parent.mainContactPhoneNumber;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parent']) {
      if(this.parent){
        this.israeliId = this.parent.israeliID;
        this.firstName = this.parent.firstName;
        this.city = this.parent.city;
        this.mainContactEmail = this.parent.mainContactEmail;
        this.mainPhoneNumber = this.parent.mainContactPhoneNumber;
      }
    }
  }

  onParentChange(parentValues: any): void {

    this.parent = parentValues;
    console.log('onParentChange(): parent: ', this.parent)
    this.updatedParent.emit(this.parent);
  }

}
