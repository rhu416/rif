import { TestBed, inject } from '@angular/core/testing';

import { SpecialistService } from './specialist.service';

describe('SpecialistServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpecialistService]
    });
  });

  it('should ...', inject([SpecialistService], (service: SpecialistService) => {
    expect(service).toBeTruthy();
  }));
});
