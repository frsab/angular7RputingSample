import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PremiumCutomerDataSource } from './premium-cutomer-datasource';

@Component({
  selector: 'app-premium-cutomer',
  templateUrl: './premium-cutomer.component.html',
  styleUrls: ['./premium-cutomer.component.css']
})
export class PremiumCutomerComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PremiumCutomerDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new PremiumCutomerDataSource(this.paginator, this.sort);
  }
}
