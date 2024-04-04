import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AcademicYear } from 'src/app/models/academicYear';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  academicYear: AcademicYear;
  isStudent: Boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        let currentUrl = event.url;
        if(currentUrl.match(/^\/home\/students\/\d+$/)){
          console.log('isStudent is true');
          this.isStudent = true;
        }
        else{
          this.isStudent = false;
        }
      }
    });
  }
  setAcademicYear(selectedAcademicYear: AcademicYear){
    this.academicYear = selectedAcademicYear;
  }

}
