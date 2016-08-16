
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent }         from './app.component';
import { appRouterProviders }   from './app.routing';

bootstrap(AppComponent, [appRouterProviders, HTTP_PROVIDERS]);
