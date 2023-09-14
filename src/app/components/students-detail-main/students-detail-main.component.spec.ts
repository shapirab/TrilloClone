import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDetailMainComponent } from './students-detail-main.component';

describe('StudentsDetailMainComponent', () => {
  let component: StudentsDetailMainComponent;
  let fixture: ComponentFixture<StudentsDetailMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsDetailMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsDetailMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
