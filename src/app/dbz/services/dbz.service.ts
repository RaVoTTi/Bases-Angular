import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DBZService {
  private _personajes: Personaje[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 7000,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes]; // buena practica de js para no dar referencia
  }

  constructor() {
    console.log('Service');
  }

  addDBZ(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
