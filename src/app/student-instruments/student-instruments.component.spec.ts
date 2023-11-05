import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInstrumentsComponent } from './student-instruments.component';

describe('StudentInstrumentsComponent', () => {
  let component: StudentInstrumentsComponent;
  let fixture: ComponentFixture<StudentInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentInstrumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
