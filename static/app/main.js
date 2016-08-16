"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_routing_1.appRouterProviders, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map