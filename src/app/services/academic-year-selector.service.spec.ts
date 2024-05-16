import { TestBed } from '@angular/core/testing';

import { AcademicYearSelectorService } from './academic-year-selector.service';

describe('AcademicYearSelectorService', () => {
  let service: AcademicYearSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicYearSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
