import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-add-personaje',
  templateUrl: './add-personaje.html',
  styleUrl: './add-personaje.css',
  standalone: false
})

export class AddPersonaje {
  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = { nombre: '', fuerza: 0, id: '' };

  agregarPersonaje() {
    if(this.personaje.nombre.length === 0) {
      return;
    } else {
      this.onNewPersonaje.emit(this.personaje);
    }
    this.personaje = { nombre: '', fuerza: 0, id: '' };
  }
}
