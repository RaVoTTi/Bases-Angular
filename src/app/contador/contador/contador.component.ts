import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    templateUrl: './contador.component.html'
})
export class ContadorComponent{
    title: string = 'Soy un pro en angular'
    numero: number = 12
    base: number = 5

    acumular (value: number):void{ this.numero += value }

}