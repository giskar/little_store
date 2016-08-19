/**
 * Created by Troviln on 16.08.2016.
 */
import { provideRouter, RouterConfig }  from '@angular/router';
import { DetailComponent } from './detail.component';
import { ListComponent } from './list.coponent';

const routes: RouterConfig = [

  {
    path: 'home',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ListComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },

];

export const appRouterProviders = [
  provideRouter(routes)
];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/