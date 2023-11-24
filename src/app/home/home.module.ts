import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { CamaraComponent } from '../camara/camara.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { FeedComponent } from '../feed/feed.component';
import { EditarPerfilComponent } from '../editar-perfil/editar-perfil.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, InicioSesionComponent, CamaraComponent, PerfilComponent, FeedComponent,EditarPerfilComponent]
})
export class HomePageModule {}
