import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.html',
  styleUrl: './lista.css',
  standalone: false
})
export class Lista {

  @Input()
  public listaPersonajes: Personaje[] = [
    { nombre: 'Yamcha', fuerza: 100 },
    { nombre: 'Krillin', fuerza: 80 }
  ];

  @Output()
  public onDeletePersonaje: EventEmitter<number> = new EventEmitter();

  borrarPersonaje(index: number) {
    this.onDeletePersonaje.emit(index);
  }
}
