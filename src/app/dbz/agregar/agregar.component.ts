import { Component, Input, Output,  EventEmitter } from '@angular/core';
// import { } from 'stream';
import { Personaje } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  // personajes: Personaje[] = [];

  // @Input('data') personajes: Personaje[] = [];
  @Input() new: Personaje = {
    name: '',
    power: 0,
  };
  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter()

  constructor(private dbzService:DBZService){}
  
  
  
  
  addDBZ() {
    if (this.new.name.trim().length === 0) {
      return;
    }
    this.dbzService.addDBZ(this.new)
    // this.onNewCharacter.emit(this.new)
    // this.personajes.unshift(this.new);
    this.new = {
      name: '',
      power: 0,
    };
  }
}
