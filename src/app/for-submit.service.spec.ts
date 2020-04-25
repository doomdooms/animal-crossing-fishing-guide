import { TestBed } from '@angular/core/testing';

import { ForSubmitService } from './for-submit.service';

describe('ForSubmitService', () => {
  let service: ForSubmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForSubmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
