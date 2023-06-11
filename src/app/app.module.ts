import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContentComponent } from './components/content/content.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component';
import { ContentMainComponent } from './components/content-main/content-main.component';
import { StudentsComponent } from './components/students/students.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { CoursesComponent } from './components/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ContentComponent,
    NavLeftComponent,
    ContentMainComponent,
    StudentsComponent,
    FacultyComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
