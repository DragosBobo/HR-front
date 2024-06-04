import { Component } from '@angular/core';
import { IUser } from '../../models/user';
import { MatTableDataSource } from '@angular/material/table';
import { FrimaDatasource } from '../fima/firma.datasource';
import { UserDatasource } from './utilizator.datasource';

@Component({
  selector: 'app-utilizatori',
  templateUrl: './utilizatori.component.html',
  styleUrl: './utilizatori.component.scss'
})
export class UtilizatoriComponent {
  displayedColumns: string[] = ['position', 'name', 'employees', 'location','validUntil', 'surname', 'location','firm','edit','details','delete'];
  datasource :MatTableDataSource<IUser> ;
  
  firmaDatasource :UserDatasource = new UserDatasource;

  constructor(){
    this.firmaDatasource.load();
    this.datasource =  new MatTableDataSource(this.firmaDatasource.getDatasource());
  }
}
