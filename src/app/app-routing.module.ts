import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrderListComponent} from './orders/order-list/order-list.component';
import {AutretableauComponent} from './shared/autretableau/autretableau.component';

const routes: Routes = [
  {
    path: 'autretableau',
    component: AutretableauComponent
  },
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
