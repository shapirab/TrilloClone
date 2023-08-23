import { TestBed } from '@angular/core/testing';

import { SchoolGradesService } from './school-grades.service';

describe('SchoolGradesService', () => {
  let service: SchoolGradesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolGradesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
