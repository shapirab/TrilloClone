import { TestBed } from '@angular/core/testing';

import { StudentRegistrationMapService } from './student-registration-map.service';

describe('StudentRegistrationMapService', () => {
  let service: StudentRegistrationMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentRegistrationMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
