import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {QuoteModel} from '../shared/models/quote/quote.model';

// TODO: Replace this with your own data model type
/*export interface TableauItem {
  name: string;
  id: number;
}*/

// TODO: replace this with real data from your application
const EXAMPLE_DATA: QuoteModel[] = [
  {id: 1, name: 'Hydrogen', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 2, name: 'Helium', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 3, name: 'Lithium', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 4, name: 'Beryllium', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 5, name: 'Boron', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 6, name: 'Carbon', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 7, name: 'Nitrogen', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 8, name: 'Oxygen', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 9, name: 'Fluorine', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 10, name: 'Neon', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 11, name: 'Sodium', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 12, name: 'Magnesium', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 13, name: 'Aluminum', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 14, name: 'Silicon', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 15, name: 'Phosphorus', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 16, name: 'Sulfur', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 17, name: 'Chlorine', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 18, name: 'Argon', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 19, name: 'Potassium', symbol: null, ask: null, bid: null, price: null, timestamp: null},
  {id: 20, name: 'Calcium', symbol: null, ask: null, bid: null, price: null, timestamp: null},
];

/**
 * Data source for the Tableau view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableauDataSource extends DataSource<QuoteModel> {
  data: QuoteModel[] = EXAMPLE_DATA;

  /*constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }*/
  constructor(private myData: QuoteModel[], private paginator: MatPaginator, private sort: MatSort) {
    super();
    if (this.myData == null) {
      return;
    }
    this.data = this.myData;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<QuoteModel[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
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
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
