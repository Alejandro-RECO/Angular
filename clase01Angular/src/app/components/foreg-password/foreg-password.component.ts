import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foreg-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './foreg-password.component.html',
  styleUrl: './foreg-password.component.css'
  
})
export class ForegPasswordComponent{
  nombreUsuarioR: string = '';
  contrasenaR: string = '';

  mensajeRecuperacion: string = '';

  constructor(
    public routeRec: Router
  ){}

  private obtenerListaUsuarios(): any[] {
    const listaUsuariosString = localStorage.getItem('listaUsuarios');
    return listaUsuariosString ? JSON.parse(listaUsuariosString) : [];
  }

  validarRec() {
   
    const listaUsuarios = this.obtenerListaUsuarios();

    const usuarioIndex = listaUsuarios.findIndex(usuario => usuario.nombre === this.nombreUsuarioR);
  
    if (usuarioIndex !== -1) {

      listaUsuarios[usuarioIndex].contrasena = this.contrasenaR;
  
      localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
  
      this.mensajeRecuperacion = 'Cambio de contraseña Realizado.';
      setTimeout(() => {
        this.routeRec.navigateByUrl('login');
      }, 2000);
    } else {
      this.mensajeRecuperacion = 'Usuario no registrado.';
  
      setTimeout(() => {
        this.routeRec.navigateByUrl('');
      }, 2000);
    }

    this.limpiarValores();
  }

  private limpiarValores() {
    this.nombreUsuarioR = '';
    this.contrasenaR = '';
  }
}