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
import { StudentsMainComponent } from './components/students-main/students-main.component';
import { StudentsFilterContainerComponent } from './components/students-filter-container/students-filter-container.component';
import { FormsModule } from '@angular/forms';
import { StudentsDetailMainComponent } from './components/students-detail-main/students-detail-main.component';
import { StudentDetailHeaderComponent } from './components/student-detail-header/student-detail-header.component';
import { StudentDetailHeaderStudentComponent } from './components/student-detail-header-student/student-detail-header-student.component';

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
    StudentsMainComponent,
    StudentsFilterContainerComponent,
    StudentsDetailMainComponent,
    StudentDetailHeaderComponent,
    StudentDetailHeaderStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
