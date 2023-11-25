import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
})
export class PublicacionComponent  implements OnInit {

  Descripcion: string="";

  constructor() { }

  ngOnInit() {}

  publicarFoto() {
    
    console.log('Descripción:', this.Descripcion);
  }
}
