import { TestBed } from '@angular/core/testing';

import { NasaService } from './nasa.service';

describe('NasaServiceService', () => {
  let service: NasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
