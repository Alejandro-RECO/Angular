import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    UserComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "clase01Angular";
  city: String = 'From a Colombia';
  userOcupation: string = 'Developer';
  message:string = "";

  receiveEmision($event:string):void{
    this.message = $event;
  }
}
