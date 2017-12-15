import { Injectable } from '@angular/core';

@Injectable()
export class WsConnectionService {

  ws: WebSocket;
  public connected: boolean;

  constructor() {
    this.ws = new WebSocket('ws://localhost:1997');
    this.ws.onopen = this.onOpen;
    this.ws.onmessage = this.onMessage;
    this.ws.onclose = this.onClose;
  }

  login(username: String): boolean {
    console.log('Trying to login as ' + username);
    return true;
  }

  onOpen() {
    this.connected = true;
  }

  onMessage(e) {
    const json = JSON.parse(e.data);
    console.log(json);
  }

  onClose() {
    this.connected = false;
  }

  public send(data: any): boolean {
    if (!this.connected)
      return false;

    this.ws.send(JSON.stringify(data));
    return true;
  }

}
