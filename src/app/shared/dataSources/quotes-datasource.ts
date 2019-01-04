import {DataSource} from '@angular/cdk/table';
import {QuotesService} from '../services/quotes.service';
import {Observable} from 'rxjs';
import {QuoteModel} from '../models/quote/quote.model';
import { MatPaginator } from '@angular/material';

export class QuotesDataSource extends DataSource<any> {
  myData: QuoteModel[] = new Array<QuoteModel>();

  constructor(private quotesService: QuotesService, private paginator: MatPaginator) {
    super();
  }

  connect(): Observable<QuoteModel[]> {
    const dataMutations = [
      this.quotesService
      , this.paginator.page
    ];
/*
Dangerous
    this.quotesService.getAllQotes().subscribe(
      data => {
        console.log('liste quotes', data);
        this.myData = data;
        console.log('ma data quwotes', this.myData.length);
        this.paginator.length = this.myData.length;

    //    return merge(...dataMutations).pipe(map(() => {
  //        return this.getPagedData(this.getSortedData([...this.data]));
//        }));
       return dataMutations;
      });
  //  console.log('ma data quotes', this.myData);
    // Set the paginator's length
    //

*/

    return this.quotesService.getAllQotes();
  }

  disconnect() {}
}


