import {DataSource} from '@angular/cdk/table';
import {QuotesService} from '../services/quotes.service';
import {merge, Observable, of as observableOf} from 'rxjs';
import {QuoteModel} from '../models/quote/quote.model';
import {MatPaginator, MatSort} from '@angular/material';
import {map} from 'rxjs/operators';

export class QuotesDataSource extends DataSource<QuoteModel> {
  data: QuoteModel[] = new Array<QuoteModel>();

  constructor(private quotesService: QuotesService,
              private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  connect(): Observable<QuoteModel[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    this.quotesService.getAllQotes().subscribe(result => {
      console.log('result quotesService' + result);
      this.data = result;
      this.paginator.length = this.data.length;
    });
    /*
    console.log('result length' + this.paginator.length );
    return this.quotesService.getAllQotes();
    */
    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  disconnect() {}
  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: QuoteModel[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }
  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: QuoteModel[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'symbol': return compare(a.symbol, b.symbol, isAsc);
        case 'bid': return compare(+a.bid, +b.bid, isAsc);
        case 'ask': return compare(+a.ask, +b.ask, isAsc);
        case 'price': return compare(+a.price, +b.price, isAsc);
        case 'timestamp': return compare(+a.timestamp, +b.timestamp, isAsc);
        default: return 0;
      }
    });
  }
}
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

