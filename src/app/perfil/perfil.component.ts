import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { DatosUsuarioService } from '../datos-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent  implements OnInit {

  constructor(private router: Router,
              public photoService: PhotoService,
              public datosUsuario: DatosUsuarioService,) { }

  ngOnInit() {}


  Editar(){
    this.router.navigate(['/editar']);
  }
}
