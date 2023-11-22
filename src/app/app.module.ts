import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { HomePage } from './home/home.page';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,ReactiveFormsModule, FormsModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"inicio-sesio","appId":"1:219536392770:web:935ba4f4e42f5cf0d323db","storageBucket":"inicio-sesio.appspot.com","apiKey":"AIzaSyDNtES3aHYV4WdTw1ZE-u4Mj8AsAhZMWFo","authDomain":"inicio-sesio.firebaseapp.com","messagingSenderId":"219536392770"})), provideAuth(() => getAuth())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
