import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailHeaderStudentComponent } from './student-detail-header-student.component';

describe('StudentDetailHeaderStudentComponent', () => {
  let component: StudentDetailHeaderStudentComponent;
  let fixture: ComponentFixture<StudentDetailHeaderStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailHeaderStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailHeaderStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
