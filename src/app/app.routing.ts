import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importamos componentes
import { AppServicios } from './servicios/servicios.component';
import { AppContactos } from './contactos/contactos.component'
import { App404 } from './404/404.component';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';

const appRoutes:Routes = [
    { path:'',component:PrincipalComponent},
    { path:'servicios',component:AppServicios},
    { path:'contactos',component:AppContactos},
    { path:'**',component:App404}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
