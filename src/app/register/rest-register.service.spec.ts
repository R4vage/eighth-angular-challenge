import { TestBed } from '@angular/core/testing';

import { RestRegisterService } from './rest-register.service';

describe('RestRegisterService', () => {
  let service: RestRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
