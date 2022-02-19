import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

  heroes: string[] = ['Iron Man', 'Spider', 'Robin', 'Bataman', 'Hulk', 'Thor']
  heroe: string  = '' 

  removeHeroe():void{
    this.heroe = this.heroes.pop() || ''
    // this.heroe = this.heroes.shift()

  }

}
