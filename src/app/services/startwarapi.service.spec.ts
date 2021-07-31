import { TestBed } from '@angular/core/testing';

import { StartwarsApiService } from './startwars-api.service';

describe('StartwarapiService', () => {
  let service: StartwarsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartwarsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
