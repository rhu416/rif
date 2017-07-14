import { Injectable } from '@angular/core';
import { Specialist } from '../model/specialist';

@Injectable()
export class SpecialistService {

  constructor() { }

  getSpecialists(): Specialist[] {
    // Return mock data, need to be updated later to call back-end http services
    return [
      {id: '1', name: 'David Test'},
      {id: '2', name: 'John Mock'}
    ];
  }
}
