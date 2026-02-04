import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.html',
  styleUrl: './lista.css',
  standalone: false
})
export class Lista {

  @Input()
  public listaPersonajes: Personaje[] = [
    { nombre: 'Yamcha', fuerza: 100, id: uuid() },
    { nombre: 'Krillin', fuerza: 80, id: uuid() },
  ];

  @Output()
  public onDeletePersonajeById: EventEmitter<string> = new EventEmitter();

  borrarPersonaje(id: string) {
    this.onDeletePersonajeById.emit(id);
  }
}
