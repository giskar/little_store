"use strict";
/**
 * Created by Troviln on 16.08.2016.
 */
var router_1 = require('@angular/router');
var detail_component_1 = require('./detail.component');
var list_coponent_1 = require('./list.coponent');
var routes = [
    {
        path: 'home',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: list_coponent_1.ListComponent
    },
    {
        path: 'detail/:id',
        component: detail_component_1.DetailComponent
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.routing.js.map