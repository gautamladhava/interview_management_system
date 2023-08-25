import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  // symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Darshan', name: '2 years', weight: 'node'},
  {position: 'sagar', name: '3 years', weight: 'react'},
  {position: 'vilas', name: '2 years', weight: 'node'},
  {position: 'pragnya', name: '3 years', weight: 'react'},
  {position: 'milan', name: '6 years', weight: 'node'},
  {position: 'mahi', name: '2 years', weight: 'react'},
  {position: 'mira', name: '5 years', weight: 'node'},
  {position: 'meera', name: '1 years', weight: 'node'},
  {position: 'nayan', name: '3 years', weight: 'react'},
  {position: 'anay', name: '1 years', weight: 'react',},
  {position: 'viru', name: '1 years', weight: 'node',},
  {position:'jay', name: '1 years', weight: 'react',},
  {position: 'ajay', name: '1 years', weight: 'node',},
  {position: 'vijay', name: '2 years', weight: 'react',},
  {position: 'karan', name: '2 years', weight: 'react'},
  {position: 'mahi', name: '3 years', weight: 'node'},
  {position:'dark', name: '3 years', weight: 'react',},
  {position: 'jayal', name: '2 years', weight: 'node',},
  {position: 'mohan', name: '2 years', weight: 'react'},
  {position: 'radhi', name: '1 years  ', weight: 'node',},
  {position: 'Darshan', name: '2 years', weight: 'node'},
  {position: 'sagar', name: '3 years', weight: 'react'},
  {position: 'vilas', name: '2 years', weight: 'node'},
  {position: 'pragnya', name: '3 years', weight: 'react'},
  {position: 'milan', name: '6 years', weight: 'node'},
  {position: 'mahi', name: '2 years', weight: 'react'},
  {position: 'mira', name: '5 years', weight: 'node'},
  {position: 'meera', name: '1 years', weight: 'node'},
  {position: 'nayan', name: '3 years', weight: 'react'},
  {position: 'anay', name: '1 years', weight: 'react',},
  {position: 'viru', name: '1 years', weight: 'node',},
  {position:'jay', name: '1 years', weight: 'react',},
  {position: 'ajay', name: '1 years', weight: 'node',},
  {position: 'vijay', name: '2 years', weight: 'react',},
  {position: 'karan', name: '2 years', weight: 'react'},
  {position: 'mahi', name: '3 years', weight: 'node'},
  {position:'dark', name: '3 years', weight: 'react',},
  {position: 'jayal', name: '2 years', weight: 'node',},
  {position: 'mohan', name: '2 years', weight: 'react'},
  {position: 'radhi', name: '1 years  ', weight: 'node',},
];
@Component({
  selector: 'app-interive',
  templateUrl: './interive.component.html',
  styleUrls: ['./interive.component.css']
})
export class InteriveComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



