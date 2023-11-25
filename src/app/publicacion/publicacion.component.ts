import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { PublishService } from '../services/publish.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
})
export class PublicacionComponent  implements OnInit {

  Descripcion: string="";

  constructor(public photoService: PhotoService,
              public publish: PublishService,
              public router: Router) { }

  ngOnInit() {}


  publicarFoto() {
    const fotoActual = this.photoService.borrador[0]?.webviewPath;
    const nuevaPublicacion = {
      foto: fotoActual,
      descripcion: this.Descripcion,
    };

    this.publish.publicaciones.unshift(nuevaPublicacion);

    this.Descripcion = '';

    this.router.navigate(['/home/inicio']);
    console.log('Descripción:', this.Descripcion);
    console.log('foto:', fotoActual);
  }

}
