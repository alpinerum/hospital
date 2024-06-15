import { TestBed } from '@angular/core/testing';

import { TotalCountServiceService } from './total-count-service.service';

describe('TotalCountServiceService', () => {
  let service: TotalCountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalCountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
