import { TestBed } from '@angular/core/testing';

import { NgxBooleanInputService } from './ngx-boolean-input.service';

describe('NgxBooleanInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxBooleanInputService = TestBed.get(NgxBooleanInputService);
    expect(service).toBeTruthy();
  });
});
