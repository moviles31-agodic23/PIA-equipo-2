import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent  implements OnInit {

  constructor(private router: Router,
    public photoService: PhotoService) { }

  ngOnInit() {}


  goHome(){
    this.router.navigate(['/feed']);
  }

  addPhotoToGallery() {
    this.router.navigate(['/perfil']);
    this.photoService.addNewToGallery();
  }

  abrirPerfil(){
    this.router.navigate(['/perfil']);
  }
}
