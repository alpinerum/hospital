import { Injectable } from '@angular/core';
import { PatientCounterService } from './patient-counter-service.service';
import { DocterCounterServiceService } from './docter-counter-service.service';

@Injectable({
  providedIn: 'root'
})
export class TotalCountServiceService {

  constructor(private _doctorCount: DocterCounterServiceService, private _patientCount: PatientCounterService) { }
  getTotal() {
    return this._doctorCount.getLength() + this._patientCount.getLength();
  }
}
