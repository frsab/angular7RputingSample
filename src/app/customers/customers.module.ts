import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { PremiumCutomerComponent } from './premium-cutomer/premium-cutomer.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {QuotesService} from '../shared/services/quotes.service';
import {TableWithPaginationComponent} from './table-with-pagination/table-with-pagination.component';

@NgModule({
  declarations: [
    PremiumCutomerComponent,
    TableWithPaginationComponent
    ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers:  [
    QuotesService
  ]
})
export class CustomersModule { }
