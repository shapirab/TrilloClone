import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFinancesComponent } from './student-finances.component';

describe('StudentFinancesComponent', () => {
  let component: StudentFinancesComponent;
  let fixture: ComponentFixture<StudentFinancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFinancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
