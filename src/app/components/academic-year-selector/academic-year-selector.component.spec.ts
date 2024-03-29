import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicYearSelectorComponent } from './academic-year-selector.component';

describe('AcademicYearSelectorComponent', () => {
  let component: AcademicYearSelectorComponent;
  let fixture: ComponentFixture<AcademicYearSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicYearSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
