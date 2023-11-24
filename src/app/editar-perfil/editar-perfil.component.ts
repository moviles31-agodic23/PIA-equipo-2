import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { DatosUsuarioService } from '../datos-usuario.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss'],
})
export class EditarPerfilComponent  implements OnInit {

  nuevoUsuario: string = 'DefaultUser';
  nuevoCorreo: string = this.datosUsuario.email;
  nuevaDescripcion: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula est, luctus ac facilisis ut, malesuada et diam. Integer sed gravida lectus.';
  imagenUsuario: string="https://th.bing.com/th/id/R.39eb0bbf2cc33ba02f53f8585004f820?rik=E0Gn4xMJk2ZerA&pid=ImgRaw&r=0";

  constructor(public photoService: PhotoService,
              public datosUsuario: DatosUsuarioService) { }
  
  

  ngOnInit() {}

  async elegirImagen() {
    this.photoService.photoUser();
  }

  guardarCambios() {
    
    console.log('Nuevo Usuario:', this.nuevoUsuario);
    console.log('Nuevo Correo:', this.nuevoCorreo);
    console.log('Nueva Descripción:', this.nuevaDescripcion);
    //Aqui hacemos cambios en el backend
  }
}
