import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  static getCategories(): Category[] {

    var categories: Category[] = [];
    categories.push({id: 1, name: 'category 1',});
    categories.push({id: 2, name: 'category 2'});

   return categories;
  }
}