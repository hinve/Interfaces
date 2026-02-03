import { Component, signal } from '@angular/core';
import { Instituto } from './instituto/instituto';

@Component({
  selector: 'app-root',
  imports: [Instituto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  playamar: Instituto = {
    nombre: 'IES Playamar',
    localidad: 'Torremolinos',
    logo: 'logo-ies-playamar.png'
  };

  valleDelAzahar: Instituto = {
    nombre: 'IES Valle del Azahar',
    localidad: 'Cártama',
    logo: 'valledelazahar.png'
  };

  jarifa: Instituto = {
    nombre: 'IES Jarifa',
    localidad: 'Alhaurín de la Torre',
    logo: 'iesjarifa.png'
  };

  institutos = [
    this.playamar,
    this.valleDelAzahar,
    this.jarifa
  ];
  
  pila: Instituto[] = [];
  
  indiceActual = 0;
  
  get institutoActual() {
    return this.institutos[this.indiceActual];
  }
  
  siguienteInstituto() {
    this.indiceActual = (this.indiceActual + 1) % this.institutos.length;
  }
  
  anteriorInstituto() {
    this.indiceActual = (this.indiceActual - 1 + this.institutos.length) % this.institutos.length;
  }
  
  eliminarInstitutoActual() {
    this.pila.push(this.institutos[this.indiceActual]);
    this.institutos.splice(this.indiceActual, 1);
    if (this.indiceActual >= this.institutos.length) {
      this.indiceActual = 0;
    }
  }
  
  insertarInstitutoPila() {
    if (this.pila.length === 0) {
      return;
    }
    const institutoRecuperado = this.pila.pop()!;
    this.institutos.push(institutoRecuperado);
  }

  getIndiceActual() {
    return this.indiceActual;
  }
}
