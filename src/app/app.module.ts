import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import { TableauComponent } from './tableau/tableau.component';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import { AutretableauComponent } from './shared/autretableau/autretableau.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauComponent,
    AutretableauComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
   MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
