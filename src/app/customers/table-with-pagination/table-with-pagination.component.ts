import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableWithPaginationDataSource } from './table-with-pagination-datasource';

@Component({
  selector: 'app-table-with-pagination',
  templateUrl: './table-with-pagination.component.html',
  styleUrls: ['./table-with-pagination.component.css']
})
export class TableWithPaginationComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableWithPaginationDataSource;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  displayedColumns1 = [ 'name', 'id'];


  ngOnInit() {
    this.dataSource = new TableWithPaginationDataSource(this.paginator, this.sort);
  }
}
