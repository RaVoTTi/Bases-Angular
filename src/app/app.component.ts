import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html' // da referencia a un archivo
  // template: '<h1>Valen</h1>'// espera codigo html
})
export class AppComponent {
  titulo: string = 'Contador App';
  numero: number= 0 // esto se lo mandas al html
  base: number = 5
  acumular(valor: number){
    this.numero += valor
  }
}
