import {DataSource} from '@angular/cdk/table';
import {QuotesService} from '../services/quotes.service';
import {Observable} from 'rxjs';
import {QuoteModel} from '../models/quote/quote.model';

export class QuotesDataSource extends DataSource<any> {

  constructor(private quotesService: QuotesService) {
    super();
  }

  connect(): Observable<QuoteModel[]> {
    this.constructor(this.quotesService);

    return this.quotesService.getAllPremiumCutomerItem();
  }

  disconnect() {}
}


