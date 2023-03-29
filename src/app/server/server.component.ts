import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.componet.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponet {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
