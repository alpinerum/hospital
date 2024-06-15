import { TestBed } from '@angular/core/testing';

import { DocterCounterServiceService } from './docter-counter-service.service';

describe('DocterCounterServiceService', () => {
  let service: DocterCounterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocterCounterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
