import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { DatosUsuarioService } from '../datos-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss'],
})
export class EditarPerfilComponent  implements OnInit {

  nuevoUsuario: string = this.datosUsuario.usuario;
  nuevoCorreo: string = this.datosUsuario.email;
  nuevaDescripcion: string = this.datosUsuario.descripcion;

  constructor(public photoService: PhotoService,
              public datosUsuario: DatosUsuarioService,
              public router: Router) { }
  
  

  ngOnInit() {}

  async elegirImagen() {
    this.photoService.photoUser();
  }
  
  guardarCambios() {
    
    console.log('Nuevo Usuario:', this.nuevoUsuario);
    console.log('Nuevo Correo:', this.nuevoCorreo);
    console.log('Nueva Descripción:', this.nuevaDescripcion);

    //Aqui hacemos cambios en el backend
    this.datosUsuario.usuario=this.nuevoUsuario;
    this.datosUsuario.email= this.nuevoCorreo;
    this.datosUsuario.descripcion=this.nuevaDescripcion;
    this.router.navigate(['/home/perfil'])
  }
}
