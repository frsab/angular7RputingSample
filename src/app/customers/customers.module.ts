import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {} from '../tableau/tableau.component';
import { PremiumCutomerComponent } from './premium-cutomer/premium-cutomer.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [
    CustomerListComponent,
    PremiumCutomerComponent,
    ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class CustomersModule { }
