import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username:string = "Luis";
  usuarioExistente: boolean = false;
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  isEditable: boolean = true;

  @Input() ocupacion: string = '';
  @Output() greet = new EventEmitter<string>();
  onMouseHover(osName:string) :void{
    console.log(osName)
  }
  emitToParent():void{
    this.greet.emit("Hi I´m your child")
  }
}
