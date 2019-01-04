import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import {} from '../tableau/tableau.component';
import { PremiumCutomerComponent } from './premium-cutomer/premium-cutomer.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {QuotesService} from '../shared/services/quotes.service';

@NgModule({
  declarations: [
    PremiumCutomerComponent,
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
