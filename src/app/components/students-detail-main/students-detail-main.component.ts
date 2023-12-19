import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-detail-main',
  templateUrl: './students-detail-main.component.html',
  styleUrls: ['./students-detail-main.component.css']
})
export class StudentsDetailMainComponent implements OnInit {
  student: Student;
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.route.params.forEach(param => {
      this.studentService.getStudentById(+param['id']).subscribe(s => {
        this.student = s;
      });
    });
  }

}
