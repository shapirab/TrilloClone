import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { CoursesComponent } from './components/courses/courses.component';
import { StudentsMainComponent } from './components/students-main/students-main.component';
import { StudentsDetailMainComponent } from './components/students-detail-main/students-detail-main.component';
import { StudentContactComponent } from './components/student-contact/student-contact.component';
import { StudentProgramComponent } from './student-program/student-program.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { StudentInstrumentsComponent } from './student-instruments/student-instruments.component';
import { StudentDocumentsComponent } from './student-documents/student-documents.component';
import { StudentFinancesComponent } from './student-finances/student-finances.component';
import { StudentExamsComponent } from './student-exams/student-exams.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'students', component: StudentsMainComponent },
      { path: 'students/:id',
        component: StudentsDetailMainComponent,
        children: [
          { path: 'contact', component: StudentContactComponent },
          { path: 'program', component: StudentProgramComponent },
          { path: 'courses', component: StudentCoursesComponent },
          { path: 'instruments', component: StudentInstrumentsComponent },
          { path: 'documents', component: StudentDocumentsComponent },
          { path: 'finances', component: StudentFinancesComponent },
          { path: 'exams', component: StudentExamsComponent },

        ]
      },
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
