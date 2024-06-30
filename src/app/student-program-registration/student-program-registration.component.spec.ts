import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProgramRegistrationComponent } from './student-program-registration.component';

describe('StudentProgramRegistrationComponent', () => {
  let component: StudentProgramRegistrationComponent;
  let fixture: ComponentFixture<StudentProgramRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProgramRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProgramRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
