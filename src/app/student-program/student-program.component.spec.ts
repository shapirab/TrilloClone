import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProgramComponent } from './student-program.component';

describe('StudentProgramComponent', () => {
  let component: StudentProgramComponent;
  let fixture: ComponentFixture<StudentProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
