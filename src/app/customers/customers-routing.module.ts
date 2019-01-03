import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {PremiumCutomerComponent} from './premium-cutomer/premium-cutomer.component';

const routes: Routes = [

  {
    path: 'premium',
    component: PremiumCutomerComponent
  },  {
    path: '',
    component: CustomerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
