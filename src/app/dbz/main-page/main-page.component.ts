import { Component, OnInit } from '@angular/core';
interface Personaje {
  name: string,
  power: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  personajes : Personaje[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7000
    }
  ]

  new : Personaje = {
    name: '',
    power: 0
  }

  addDBZ() {
    if(this.new.name.trim().length === 0) {return }

    // this.personajes.unshift(this.new)
    this.personajes.push(this.new)


  }
  

}
