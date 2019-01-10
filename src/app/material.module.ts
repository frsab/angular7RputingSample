import {NgModule} from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {
  MatIconModule, MatInputModule,
  MatListModule, MatPaginatorModule,
  MatSidenavModule, MatSort, MatSortModule,
  MatTableDataSource, MatTableModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
  imports: [
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    CdkTableModule
  ],
  exports: [
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    CdkTableModule
  ]
})
export class MaterialModule {
}
