import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-main',
  templateUrl: './students-main.component.html',
  styleUrls: ['./students-main.component.css']
})
export class StudentsMainComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  //TODO: How do we get the academic year id into this component?
  filterByActiveStudents(isActive: boolean){
    console.log('in students-main got from filter container isActive: ', isActive);
    this.studentService.getStudentsByRegistrationStatus(1, isActive)
    .subscribe({
      next: (res) => {
        this.students = res;
        console.log(this.students);
      },
      error: err => console.log(err)
    });
  }

}
