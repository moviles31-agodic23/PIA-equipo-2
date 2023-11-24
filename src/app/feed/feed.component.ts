import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { DatosUsuarioService } from '../datos-usuario.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent  implements OnInit {

  constructor(public photoService: PhotoService,
              public datosUsuario: DatosUsuarioService) { }

  ngOnInit() {}
   

}
