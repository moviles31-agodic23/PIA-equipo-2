import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
  
})
export class InicioSesionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  component = HomePage;
  tamanoCel: number = 12;
  tamanoGrande: number = 5;

}

