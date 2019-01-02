import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AutretableauDataSource } from './autretableau-datasource';

@Component({
  selector: 'app-autretableau',
  templateUrl: './autretableau.component.html',
  styleUrls: ['./autretableau.component.css']
})
export class AutretableauComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AutretableauDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new AutretableauDataSource(this.paginator, this.sort);
  }
}
