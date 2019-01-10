import {Component, OnInit, ViewChild} from '@angular/core';
import {QuotesService} from '../../shared/services/quotes.service';
import {MatPaginator, MatSort} from '@angular/material';
import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {QuoteModel} from '../../shared/models/quote/quote.model';
import {QuotesDataSource} from '../../shared/dataSources/quotes-datasource';

@Component({
  selector: 'app-premium-cutomer',
  templateUrl: './premium-cutomer.component.html',
  styleUrls: ['./premium-cutomer.component.css']
})
export class PremiumCutomerComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  myQuotesDataSource: QuotesDataSource;
  displayedColumns = ['symbol', 'bid', 'ask', 'price', 'timestamp'];


  constructor(private quotesService: QuotesService) {
  }
  applyFilter(filterValue: string) {
    this.myQuotesDataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {

    this.myQuotesDataSource = new QuotesDataSource(this.quotesService, this.paginator, this.sort);
  }
}
