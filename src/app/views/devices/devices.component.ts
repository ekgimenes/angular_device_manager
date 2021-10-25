import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DeviceService } from 'src/app/services/device-service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})

export class DevicesComponent implements OnInit {

  columns = ['id', 'category', 'color', 'partNumber'];
  dataSource = new MatTableDataSource(DeviceService.getDevices());

  constructor() { }

  ngOnInit(): void {

  }

}
