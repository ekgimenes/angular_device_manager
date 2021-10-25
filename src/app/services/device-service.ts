import { Injectable } from '@angular/core';
import { Device } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  static getDevices(): Device[] {

    var devices: Device[] = [ ];

    devices.push({id: 1, category: 1, color: 'red', partNumber: 1111 });
    devices.push({id: 2, category: 2, color: 'yellow', partNumber: 3334 });

   return devices;
  }

 
}