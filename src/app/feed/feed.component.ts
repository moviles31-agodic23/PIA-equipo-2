import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { DatosUsuarioService } from '../datos-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent  implements OnInit {

  constructor(public photoService: PhotoService,
              public datosUsuario: DatosUsuarioService,
              public router: Router) { }

  ngOnInit() {}
   
    public cerrarSesion() {
      this.router.navigate(['/login']);
      this.photoService.photos.length = 0;
    }
}
