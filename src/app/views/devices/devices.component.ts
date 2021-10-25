import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Device {
  id: number;
  category: number;
  color: string;
  partNumber: number;
}

const ELEMENT_DATA: Device[] = [
  {id: 1, category: 1, color: 'blue', partNumber: 1111},
  {id: 2, category: 1, color: 'red', partNumber: 2222},
  {id: 3, category: 1, color: 'green', partNumber: 2222},
];

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})

export class DevicesComponent implements OnInit {
  columns = ['id', 'category', 'color', 'partNumber'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}
