import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { DatosUsuarioService } from '../datos-usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent  implements OnInit {

  constructor(public photoService: PhotoService,
              public datosUsuario: DatosUsuarioService,) { }

  ngOnInit() {}

}
