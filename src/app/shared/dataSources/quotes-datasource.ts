import {DataSource} from '@angular/cdk/table';
import {QuotesService} from '../services/quotes.service';
import {Observable} from 'rxjs';
import {QuoteModel} from '../models/quote/quote.model';

export class QuotesDataSource extends DataSource<QuoteModel> {
  data: QuoteModel[] = new Array<QuoteModel>();

  constructor(private quotesService: QuotesService) {
    super();
  }

  connect(): Observable<QuoteModel[]> {
    const dataMutations = [
      this.quotesService
    ];
/*
    this.quotesService.getAllQotes().subscribe(result => {
      console.log('result quotesService' + result);
    });
*/
    return this.quotesService.getAllQotes();
  }

  disconnect() {}
}


