import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parent } from 'src/app/models/parent';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-contact',
  templateUrl: './student-contact.component.html',
  styleUrls: ['./student-contact.component.css']
})
export class StudentContactComponent implements OnInit {
  studentId: number;
  IsraeliID: string;
  FirstName: string;
  LastName: string;
  DateOfBirth: Date;
  Address: string;
  City: string;
  MainContactPhone: string;
  MainContactEmail: string;

  isNewStudent: boolean = false;

  parent1: Parent;
  parent2: Parent;

  constructor(private service: StudentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.studentId = +params['id'];

      if(this.studentId){
        this.loadStudent();
      }
      else{
        this.isNewStudent = true;
      }
      this.getStudentParents(this.studentId);
    });
  }

  loadStudent(){
    this.service.getStudentById(this.studentId).subscribe((student) => {
      this.populateForm(student);
    });
  }

  populateForm(student: Student){
    if(student){
      this.IsraeliID = student.israeliID;
      this.FirstName = student.firstName;
      this.LastName = student.lastName;
      this.MainContactEmail = student.mainContactEmail;
      this.MainContactPhone = student.mainContactPhoneNumber;
      this.Address = student.address;
      this.City = student.city;
      this.DateOfBirth = student.dateOfBirth;
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  }

  onSave(value: any){
    this.isNewStudent ? this.createNewStudent(value) : this.updateStudent(value);
    this.router.navigate(['/students']);
  }

  createNewStudent(value: any){
    this.service.saveStudent(value);

  }

  updateStudent(value: Student){
    this.service.updateStudent(value.israeliID, value);
  }

  updateStudentParent_1(updatedParent1: Parent){
    this.parent1 ? this.updateStudentParent(updatedParent1, this.parent1) :
                    this.addStudentParent(updatedParent1);
  }

  updateStudentParent_2(updatedParent2: Parent){
    this.parent1 ? this.updateStudentParent(updatedParent2, this.parent2) :
                    this.addStudentParent(updatedParent2);
  }

  updateStudentParent(parent:Parent, parentToUpdate: Parent){
    parent.lastName = this.LastName;
    parent.address = this.Address;
    this.service.updateStudentParent(parentToUpdate.stakeholderID!, parent);
  }


  addStudentParent(parent:Parent){
    parent.lastName = this.LastName;
    parent.address = this.Address;
    this.service.addStudentParent(parent, this.studentId);
  }

  getStudentParents(studentId: number){
    this.service.getStudentParents(studentId).subscribe({
      next: parentsRes => {
        let parents: Parent[] = parentsRes;
        this.parent1 = parents[0];
        this.parent2 = parents[1]
      },
      error: err => console.log(err)
    });
  }
}
