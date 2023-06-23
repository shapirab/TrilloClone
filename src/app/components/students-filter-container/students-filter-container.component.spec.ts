import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsFilterContainerComponent } from './students-filter-container.component';

describe('StudentsFilterContainerComponent', () => {
  let component: StudentsFilterContainerComponent;
  let fixture: ComponentFixture<StudentsFilterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsFilterContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
