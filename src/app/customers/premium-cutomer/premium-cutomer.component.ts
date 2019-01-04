import {Component, OnInit, ViewChild} from '@angular/core';
import {QuotesService} from '../../shared/services/quotes.service';
import { MatPaginator } from '@angular/material';
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

  quotesDataSource: QuotesDataSource;
   // quotesDataSource = new QuotesDataSource(this.quotesService, this.paginator);
  displayedColumns = ['symbol', 'bid', 'ask', 'price', 'timestamp'];


  constructor(private quotesService: QuotesService) {
  }

  ngOnInit() {
    this.quotesDataSource = new QuotesDataSource(this.quotesService, this.paginator);
  }
}
