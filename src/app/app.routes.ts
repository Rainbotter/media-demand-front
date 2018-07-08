import {RouterModule, Routes} from '@angular/router';
import {MainAccessGuard} from './main-access.guard';

const appRoutes: Routes = [
  {
    path: 'demands',
    loadChildren: 'app/medialist/medialist.module#MedialistModule',
    canActivate: [MainAccessGuard]
  },
  {
    path: '', redirectTo: 'demands', pathMatch: 'full'
  }];


export const APP_ROUTES = RouterModule.forRoot(appRoutes);
