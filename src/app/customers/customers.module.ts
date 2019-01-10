import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { PremiumCutomerComponent } from './premium-cutomer/premium-cutomer.component';
import {QuotesService} from '../shared/services/quotes.service';
import {TableWithPaginationComponent} from './table-with-pagination/table-with-pagination.component';
import {MaterialModule} from '../material.module';

@NgModule({
  declarations: [
    PremiumCutomerComponent,
    TableWithPaginationComponent
    ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MaterialModule
  ],
  providers:  [
    QuotesService
  ]
})
export class CustomersModule { }
