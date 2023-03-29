import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.componet.html',
})
export class ServerComponet {
  serverId = 10;
  serverStatus = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
