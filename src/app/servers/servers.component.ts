import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //template: '<app-server></app-server><app-server></app-server>',  --> de esta forma podemos agregar codigo html directamente aca siempre  cuando sea poco como 3 o 4 lineas (si no mejor crear un archivo)
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  mensajeInicial = 'este es un mensaje de interpolacion';
  serverCreationStatus = 'no server was created';
  vinculacionInicial = 'vinculacion no creada';
  serverName = '';
  vinculacion = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created! name is ' + this.serverName;
  }

  vinculacionDatos() {
    this.vinculacionInicial =
      'la vinculacion por variable funciona ' + this.vinculacion;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateServerEstado(event: Event) {
    this.vinculacion = (<HTMLInputElement>event.target).value;
  }
}
