import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {

  constructor() { }

  
  public email: any = 'user.1@email.com';
  public usuario: string= 'User';
  public descripcion: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula est, luctus ac facilisis ut, malesuada et diam. Integer sed gravida lectus.";
}
