import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public photoService: PhotoService, public router: Router) {}

  addPhotoToGallery() {
    this.router.navigate(['/home/publicar']);
    this.photoService.addNewToGallery();
    
  }
}
