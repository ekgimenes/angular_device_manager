import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Category {
  name: string;
  id: number;
}

const ELEMENT_DATA: Category[] = [
  {id: 1, name: 'category 1'},
  {id: 2, name: 'category 2'},
  {id: 3, name: 'category 3'},
];

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  columns = ['id', 'name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}
