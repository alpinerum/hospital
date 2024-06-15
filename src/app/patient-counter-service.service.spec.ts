import { TestBed } from '@angular/core/testing';

import { PatientCounterServiceService } from './patient-counter-service.service';

describe('PatientCounterServiceService', () => {
  let service: PatientCounterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientCounterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
