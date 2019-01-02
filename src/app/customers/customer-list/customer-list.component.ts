import {Component, OnInit} from '@angular/core';
import {QuotesService} from '../../shared/services/quotes.service';
import {QuoteModel} from '../../shared/models/quote/quote.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  quotes: QuoteModel[];

  constructor(private quotesService: QuotesService) {
  }

  ngOnInit() {

    this.quotesService.getAllQotes()
      .subscribe(
        data => {
          console.log('liste quotes', data);
          this.quotes = data;
        });
  }

}
