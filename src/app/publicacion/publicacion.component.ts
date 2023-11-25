import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
})
export class PublicacionComponent  implements OnInit {

  Descripcion: string="";

  constructor(public photoService: PhotoService) { }

  ngOnInit() {}

  publicaciones: { foto: string | undefined, descripcion: string }[] = [];

  publicarFoto() {
    const fotoActual = this.photoService.borrador[0]?.webviewPath;
    const nuevaPublicacion = {
      foto: fotoActual,
      descripcion: this.Descripcion,
    };

    this.publicaciones.push(nuevaPublicacion);

    this.Descripcion = '';

    console.log('Descripción:', this.Descripcion);
  }

}
