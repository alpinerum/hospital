import { Injectable } from '@angular/core';
import { Patients } from './patients-data';

@Injectable({
  providedIn: 'root'
})
export class PatientCounterService {

  constructor() { }
  getLength() {
    return Patients.length;
  }
}
