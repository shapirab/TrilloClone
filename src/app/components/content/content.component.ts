import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  isStudent: Boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('entering onInit');

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        let currentUrl = event.url;
        console.log(currentUrl);
        if(currentUrl.match(/^\/home\/students\/\d+$/)){
          console.log('isStudent is true');
          this.isStudent = true;
        }
        else{
          console.log('isStudent is false');
          this.isStudent = false;
        }
      }
    });


    // if(this.router.url.match(/^\/students\/\d+$/)){
    //   console.log(this.isStudent);
    //   this.isStudent = true;
    // }
    // else{
    //   console.log('isStudent is false');
    //   this.isStudent = false;
    // }
  }

}
