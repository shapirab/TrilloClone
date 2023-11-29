import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsContactComponent } from './parents-contact.component';

describe('ParentsContactComponent', () => {
  let component: ParentsContactComponent;
  let fixture: ComponentFixture<ParentsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentsContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
