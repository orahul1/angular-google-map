import { TestBed } from '@angular/core/testing';

import { AngularGoogleMapService } from './angular-google-map.service';

describe('AngularGoogleMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularGoogleMapService = TestBed.get(AngularGoogleMapService);
    expect(service).toBeTruthy();
  });
});
