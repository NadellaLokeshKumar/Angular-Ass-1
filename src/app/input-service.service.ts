import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputServiceService {

  constructor() {}

  gender: Array<string> = ['Male', 'Female', 'Other'];

  countries: Array<string> = ['India', 'US', 'Canada', 'Sweden', 'Japan'];
}
