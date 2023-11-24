import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FeedComponent } from './feed/feed.component';
import { CamaraComponent } from './camara/camara.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: InicioSesionComponent,
  },
  // las siguientes rutas fueron hechas para pruebas
  // revisar si es que se pueden -
  // utilizar para la funcionalidad
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'inicio',
    component: FeedComponent,
  },
  {
    path: 'camara',
    component: CamaraComponent,
  },
  {
    path: 'editar',
    component: EditarPerfilComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
