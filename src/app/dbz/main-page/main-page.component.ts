import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {

  new: Personaje={
    name: 'Valen',
    power: 10000
  }

  constructor(private dbzService: DBZService){}
}
