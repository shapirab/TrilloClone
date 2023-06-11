import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  {path: 'home/students', component: StudentsComponent},
  {path: 'home/faculty', component: FacultyComponent},
  {path: 'home/courses', component: CoursesComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
