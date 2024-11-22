import { TestBed } from '@angular/core/testing';

import { ProgramPriceListService } from './program-price-list.service';

describe('ProgramPriceListService', () => {
  let service: ProgramPriceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramPriceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
