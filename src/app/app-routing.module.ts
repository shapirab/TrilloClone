import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'students', component: StudentsComponent },
      { path: 'faculty', component: FacultyComponent },
      {path: 'courses', component: CoursesComponent},
      { path: '', redirectTo: 'students', pathMatch: 'full' }
    ]
  },
  {path: '', redirectTo: 'home/students', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
