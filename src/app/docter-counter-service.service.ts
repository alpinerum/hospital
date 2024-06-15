import { Injectable } from '@angular/core';
import { doctors } from './doctor-data';

@Injectable({
  providedIn: 'root'
})
export class DocterCounterServiceService{

  constructor() { }
  getLength() {
    return doctors.length;
  }
}
