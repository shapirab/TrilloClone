import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { CoursesComponent } from './components/courses/courses.component';
import { StudentsMainComponent } from './components/students-main/students-main.component';
import { StudentsDetailMainComponent } from './components/students-detail-main/students-detail-main.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'students', component: StudentsMainComponent },
      { path: 'students/:id', component: StudentsDetailMainComponent },
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
