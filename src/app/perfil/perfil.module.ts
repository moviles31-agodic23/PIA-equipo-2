import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil.component';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: PerfilComponent }])],
  declarations: [PerfilComponent],
  exports: [PerfilComponent],
})
export class SearchPageModule {}