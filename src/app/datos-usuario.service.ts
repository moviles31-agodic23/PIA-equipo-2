import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {

  constructor() { }

  public usuario: string= '';
  public email: any = 'usuario';
}
