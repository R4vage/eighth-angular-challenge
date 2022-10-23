import { TestBed } from '@angular/core/testing';

import { RestLoginService } from './rest-login.service';

describe('RestLoginService', () => {
  let service: RestLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
