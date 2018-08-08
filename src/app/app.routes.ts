import { Routes, RouterModule } from '@angular/router';


import { MyNavComponent } from './my-nav/my-nav.component';
import { ModuleWithProviders } from '../../node_modules/@angular/core';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyTableComponent } from './my-table/my-table.component';
import { ExpandingPanelComponent } from './expanding-panel/expanding-panel.component';
import { ReactiveJsComponent } from './reactive-js/reactive-js.component';

export const router: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'nav', component: MyNavComponent},
  { path: 'dashboard', component: MyDashboardComponent},
  { path: 'table', component: MyTableComponent},
  { path: 'panel', component: ExpandingPanelComponent},
  { path: 'reactive', component: ReactiveJsComponent}
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
