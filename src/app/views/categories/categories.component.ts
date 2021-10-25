import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/services/category-service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  columns = ['id', 'name'];
  dataSource = new MatTableDataSource(CategoryService.getCategories());

  constructor() { }

  ngOnInit(): void {
  }

}
