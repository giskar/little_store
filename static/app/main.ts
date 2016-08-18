import {Injectable, provide} from '@angular/core';

import {CookieXSRFStrategy,XSRFStrategy} from '@angular/http';

import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent }         from './app.component';
import { appRouterProviders }   from './app.routing';



export var app = bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  provide(XSRFStrategy, {useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')})
]);

//bootstrap(AppComponent, [appRouterProviders, HTTP_PROVIDERS]);
