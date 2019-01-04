import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PremiumCutomerComponent} from './premium-cutomer/premium-cutomer.component';

const routes: Routes = [

  {
    path: 'premium',
    component: PremiumCutomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
