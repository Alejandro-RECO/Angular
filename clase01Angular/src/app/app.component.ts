import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    public route:Router
  ){}

  title = "clase01Angular";
  city: String = 'From a Colombia';
  userOcupation: string = 'Developer';
  message:string = "";

  receiveEmision($event:string):void{
    this.message = $event;
  }
  navegarLogin(){
    this.route.navigateByUrl('login')
  }
  navegarRegistrarse(){
    this.route.navigateByUrl('formulario')
  }
}
