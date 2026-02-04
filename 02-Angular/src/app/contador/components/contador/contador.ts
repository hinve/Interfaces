import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: ` <h1>CONTADOR:</h1>
                <button type="button" (click)="incrementar()">+{{ x }}</button>
                <button type="button" (click)="decrementar()">- {{ x }}</button>
                <br>
                <button type="reset" (click)="reset()">reset</button>
                <p>Numero: {{ contador }}</p>
                <input #numInput type="number" name="x" id="x"> <button type="button" (click)="sendNumber(numInput.value)">Mandar</button>`,
    standalone: false
})

export class ContadorComponent {
    constructor() { }

  contador = 0;
  x = 1;

  incrementar() {
    this.contador = this.contador + this.x;
  }

  decrementar() {
    if(this.contador >= this.x) {
      this.contador = this.contador - this.x;
    }
  }

  reset() {
    this.contador = 0;
  }

  sendNumber(x: string) {
    if(x && Number.parseInt(x) >= 0) {
      this.x = Number.parseInt(x);
    }
  }
}