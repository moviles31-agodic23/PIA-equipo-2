import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {

  constructor() { }

  public usuario: string= 'User';
  public email: any = 'user.1@email.com';
}
