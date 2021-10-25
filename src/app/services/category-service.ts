import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  static getCategories(): Category[] {

    var devices: Category[] = [];
    //TODO: implement data reader.
    devices.push({id: 1, name: 'category 1',});
    devices.push({id: 2, name: 'category 2'});
    //TODO: implement data reader.

   return devices;
  }
}