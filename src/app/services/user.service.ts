import { Injectable } from '@angular/core';
 
import { UserRegistro } from '../models/models';
import { Auth , createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth ) { }
  
  registrarUser(datos: UserRegistro){
      return createUserWithEmailAndPassword(this.auth,datos.emailReg,datos.passwordReg);
  }

  login(email: string, password: string){
    return signInWithEmailAndPassword( this.auth, email, password);
  }

}
