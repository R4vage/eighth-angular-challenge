import { TestBed } from '@angular/core/testing';

import { RestHomeService } from './rest-home.service';

describe('RestHomeService', () => {
  let service: RestHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
