import {RouterModule, Routes} from '@angular/router';
import {DashbaoardComponent} from './dashboard/dashbaoard.component';
import {DemandsComponent} from './demands/demands.component';
import {NewDemandComponent} from './new-demand/new-demand.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashbaoardComponent,
  }, {
    path: 'list',
    component: DemandsComponent,
  }, {
    path: 'new',
    component: NewDemandComponent,
  },
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  }];

export const APP_ROUTES = RouterModule.forChild(appRoutes);
