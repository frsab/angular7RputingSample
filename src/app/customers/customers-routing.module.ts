import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableWithPaginationComponent} from './table-with-pagination/table-with-pagination.component';
import {PremiumCutomerComponent} from './premium-cutomer/premium-cutomer.component';

const routes: Routes = [

  {
    path: 'premium',
    component: PremiumCutomerComponent
  },
  {
    path: 'pagination',
    component: TableWithPaginationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
