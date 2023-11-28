import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  constructor(
    public route:Router
  ){}

  navegarlogin(){
    this.route.navigateByUrl('login')
  }

  nombreUsuarioRegistro: string = '';
  numberRegistro: string = '';
  emailRegistro: string = '';
  contrasenaRegistro: string = '';

  mensajeRegistro: string = '';


  // Función para obtener la lista de usuarios del localStorage
  private obtenerListaUsuarios(): any[] {
    const listaUsuariosString = localStorage.getItem('listaUsuarios');
    return listaUsuariosString ? JSON.parse(listaUsuariosString) : [];
  }

  enviarDatosRegistro() {
    // Verifica si todos los campos están llenos
    if (
      this.nombreUsuarioRegistro &&
      this.numberRegistro &&
      this.emailRegistro &&
      this.contrasenaRegistro 
    ) {
      // Crea un nuevo usuario
      const nuevoUsuario = {
        nombre: this.nombreUsuarioRegistro,
        numero: this.numberRegistro,
        email: this.emailRegistro,
        contrasena: this.contrasenaRegistro
      };

  
      console.log('Nuevo Usuario:', nuevoUsuario);

      
      const listaUsuarios = this.obtenerListaUsuarios();
  
    
      listaUsuarios.push(nuevoUsuario);
  
      
      localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
  
    
      this.mensajeRegistro = 'Registro exitoso';
      setTimeout(() => {
        this.route.navigateByUrl('home');
      }, 2000);
    } else {
      this.mensajeRegistro = 'Registro fallido hay campos sin completar.';
    }
  }
}
