import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  private obtenerListaUsuarios(): any[] {
    const listaUsuariosString = localStorage.getItem('listaUsuarios');
    return listaUsuariosString ? JSON.parse(listaUsuariosString) : [];
  }
  usersregisters = this.obtenerListaUsuarios()
}
