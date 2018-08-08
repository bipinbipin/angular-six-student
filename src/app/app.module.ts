import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatBadgeModule
} from '@angular/material';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyTableComponent } from './my-table/my-table.component';
import { ExpandingPanelComponent } from './expanding-panel/expanding-panel.component';
import { routes } from './app.routes';
import { ReactiveJsComponent } from './reactive-js/reactive-js.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    MyTableComponent,
    ExpandingPanelComponent,
    ReactiveJsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
