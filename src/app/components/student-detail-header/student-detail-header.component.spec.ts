import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailHeaderComponent } from './student-detail-header.component';

describe('StudentDetailHeaderComponent', () => {
  let component: StudentDetailHeaderComponent;
  let fixture: ComponentFixture<StudentDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
