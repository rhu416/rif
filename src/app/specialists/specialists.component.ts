import { Component, OnInit } from '@angular/core';
import { Specialist } from '../model/specialist';
import { SpecialistService } from '../service/specialist.service';

@Component({
  selector: 'rif-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.css'],
  providers: [SpecialistService]
})
export class SpecialistsComponent implements OnInit {
  specialists: Specialist[];
  constructor(private specialistService: SpecialistService) { }

  ngOnInit() {
    this.getSpecialists();
  }

  getSpecialists(): void {
    this.specialists = this.specialistService.getSpecialists();
  }
}
