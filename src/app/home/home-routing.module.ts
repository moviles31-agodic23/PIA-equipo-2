import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { FeedComponent } from '../feed/feed.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { EditarPerfilComponent } from '../editar-perfil/editar-perfil.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'inicio',
        component: FeedComponent,
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      },
      {
        path: 'editar',
        component: EditarPerfilComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
