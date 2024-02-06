import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @Input() students: Student[];
  constructor(private studentService: StudentService, private route: Router) { }

  ngOnInit(): void {
    if(this.students.length == 0){
      this.getStudents();
    }
  }

  async getStudents(){
      await this.studentService.getAll().subscribe(res => {
      this.students = res;
    });
  }

  onAdd(){
    this.route.navigate(['home/contact']);
  }
}
