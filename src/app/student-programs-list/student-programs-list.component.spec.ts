import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProgramsListComponent } from './student-programs-list.component';

describe('StudentProgramsListComponent', () => {
  let component: StudentProgramsListComponent;
  let fixture: ComponentFixture<StudentProgramsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProgramsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProgramsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
