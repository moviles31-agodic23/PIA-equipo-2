import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { UserService } from '../services/user.service';
import { User } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegistro } from '../models/models';
import { Auth } from '@angular/fire/auth/firebase';
import { DatosUsuarioService } from '../datos-usuario.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
  
})
export class InicioSesionComponent  implements OnInit {

  datos: UserRegistro = {
    emailReg: '',
    passwordReg: '',
    passwordRegConf:''
  }
  
  login = {
    email: '',
    password: ''
  }

  constructor( 
    private router: Router,
    private auth: UserService,
    public datosUsuario: DatosUsuarioService,
    ) {}

  ngOnInit()  {}

  setUsuario(){
    this.datosUsuario.email= this.login.email;
    this.datosUsuario.usuario = this.login.email.split('@')[0];
  }

  component = HomePage;
  tamanoCel: number = 12;
  tamanoGrande: number = 5;

  async registrar(){
    console.log('datos -> ',this.datos);
    this.auth.registrarUser(this.datos);
    this.datos.emailReg = '';
    this.datos.passwordReg = '';
    this.datos.passwordRegConf = '';
  }

  async iniciarSesion(){
    console.log('login -> ',this.datos);
    const res = await this.auth.login(this.login.email,this.login.password).catch(error => {
        console.log('error');
    })
    if (res){
      console.log('res -> ', res);
      this.setUsuario();
      this.router.navigate(['/home/inicio']);
      this.login.email = '';
      this.login.password = '';
    }
  }


}

