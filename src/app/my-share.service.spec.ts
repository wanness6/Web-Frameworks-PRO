import { TestBed } from '@angular/core/testing';

import { MyShareService } from './my-share.service';

describe('MyShareService', () => {
  let service: MyShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
