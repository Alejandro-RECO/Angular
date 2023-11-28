import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  nombreUsuario: string = '';
  contrasena: string = '';
  mensajeInicioSesion: string = '';


  constructor(
    public route:Router
  ){}

  navegarRegister(){
    this.route.navigateByUrl('formulario')
  }
  navegarForgot(){
    this.route.navigateByUrl('forgot-password')
  }

  private obtenerListaUsuarios(): any[] {
    const listaUsuariosString = localStorage.getItem('listaUsuarios');
    return listaUsuariosString ? JSON.parse(listaUsuariosString) : [];
  }

  validarInicio() {

    const listaUsuarios = this.obtenerListaUsuarios();
 
    const usuarioValido = listaUsuarios.some(usuario => usuario.nombre === this.nombreUsuario && usuario.contrasena === this.contrasena);

    const usuarioIncorrecto = listaUsuarios.some(usuario => usuario.nombre === this.nombreUsuario || usuario.contrasena === this.contrasena);

    if (usuarioValido) {
      this.mensajeInicioSesion = 'Inicio de sesión exitoso.';
      console.log("Exitoso");
      
      setTimeout(() => {
        this.route.navigateByUrl('home');;
      }, 2000);

    } else if (usuarioIncorrecto) {
      this.mensajeInicioSesion = 'Informacion incorrecta.';
    }else{
      this.mensajeInicioSesion = 'Usuario no registrado.';

      setTimeout(() => {
        this.route.navigateByUrl('');;
      }, 2000);
    }
    this.limpiarValores();
  }
  private limpiarValores() {
    this.nombreUsuario = '';
    this.contrasena = '';
  }
}
