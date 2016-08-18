"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_2 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
exports.app = platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routing_1.appRouterProviders,
    http_2.HTTP_PROVIDERS,
    core_1.provide(http_1.XSRFStrategy, { useValue: new http_1.CookieXSRFStrategy('csrftoken', 'X-CSRFToken') })
]);
//bootstrap(AppComponent, [appRouterProviders, HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map