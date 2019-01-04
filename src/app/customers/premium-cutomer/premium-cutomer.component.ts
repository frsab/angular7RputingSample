import {Component, OnInit} from '@angular/core';
import {QuotesService} from '../../shared/services/quotes.service';
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
  quotesDataSource = new QuotesDataSource(this.quotesService);
  displayedColumns = ['symbol', 'bid', 'ask', 'price', 'timestamp'];


  constructor(private quotesService: QuotesService) {
  }

  ngOnInit() {
  }
}
