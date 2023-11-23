import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public photoService: PhotoService,
              private router: Router) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  abrirPerfil(){
    this.router.navigate(['/perfil']);
  }

  goHome(){
    this.router.navigate(['/feed']);
  }
}
