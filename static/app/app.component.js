"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_service_1 = require('./http.service');
var detail_component_1 = require('./detail.component');
//import './rxjs-extensions';
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n   <nav>\n\n      <a [routerLink]=\"['/']\" routerLinkActive=\"active\">Home</a>\n\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            styleUrls: ['static/app/app.component.css'],
            directives: [detail_component_1.DetailComponent, router_1.ROUTER_DIRECTIVES],
            providers: [
                http_service_1.HttpService,
            ]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map