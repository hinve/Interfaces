import { Component } from '@angular/core';
import { Heroe } from '../heroe/heroe';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.html',
  styleUrl: './lista-heroes.css',
  standalone: false,
})
export class ListaHeroes {
  heroes = [
    { nombre: 'Goku', edad: 35 },
    { nombre: 'Vegeta', edad: 38 },
    { nombre: 'Gohan', edad: 23 },
    { nombre: 'Piccolo', edad: 25 },
    { nombre: 'Trunks', edad: 18 }
  ];

  heroesEliminados: string[] = [];

  borrarUltimoHeroe() {
    if (this.heroes.length > 0) {
      const heroeEliminado = this.heroes.pop();
      if (heroeEliminado) {
        this.heroesEliminados.push(heroeEliminado.nombre);
      }
    }
  }

  get mensajeEliminados(): string {
    if (this.heroesEliminados.length === 0) {
      return 'No ha eliminado ningun heroe';
    }
    return `Héroe eliminado: ${this.heroesEliminados[this.heroesEliminados.length - 1]}`;
  }
}
