import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'], //la ruta de hoja de estilos esta encerrado en un array por que podemos poner mas de 1
  styles: [
    `
      h1 {
        color: green;
      }
    `,
  ],
})
export class AppComponent {}
