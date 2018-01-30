import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routing'

import { AppComponent } from './app.component';
import { AppServicios } from './servicios/servicios.component';
import { AppContactos } from './contactos/contactos.component';
import { App404 } from './404/404.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    AppServicios,
    AppContactos,
    App404,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
