import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent  implements OnInit {

  constructor(private router: Router,
    public photoService: PhotoService) { }

  ngOnInit() {}

  goHome(){
    this.router.navigate(['/inicio']);
  }

  addPhotoToGallery() {
    this.router.navigate(['/perfil']);
    this.photoService.addNewToGallery();
  }

  abrirPerfil(){
    this.router.navigate(['/perfil']);
  }

}
