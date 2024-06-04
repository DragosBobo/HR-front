import { Component } from '@angular/core';
import { FrimaDatasource } from './firma.datasource';
import { IFirma } from '../../models/firma';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-fima',
  templateUrl: './fima.component.html',
  styleUrl: './fima.component.scss'
})
export class FimaComponent {
  datasource :MatTableDataSource<IFirma> ;
  
   firmaDatasource :FrimaDatasource = new FrimaDatasource;
  displayedColumns: string[] = ['position', 'name', 'employees', 'location','validUntil','edit','details','delete',];
  constructor(){
    this.firmaDatasource.load();
    this.datasource =  new MatTableDataSource(this.firmaDatasource.getDatasource());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

}
