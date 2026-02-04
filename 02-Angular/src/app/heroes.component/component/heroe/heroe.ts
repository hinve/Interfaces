import { Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.html',
  styleUrl: './heroe.css',
  standalone: false
})
export class Heroe {
  @Input() nombre: string = 'Goku';
  @Input() edad: number = 35;

  private nombreInicial: string = '';
  private edadInicial: number = 0;

  ngOnInit() {
    this.nombreInicial = this.nombre;
    this.edadInicial = this.edad;
  }

  get nombreYEdad(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre() {
    const nombres = ['Goku', 'Vegeta', 'Gohan', 'Piccolo', 'Trunks', 'Krillin'];
    const nombreActual = nombres.indexOf(this.nombre);
    this.nombre = nombres[(nombreActual + 1) % nombres.length];
  }

  cambiarEdad() {
    this.edad = Math.floor(Math.random() * 50) + 18;
  }

  restablecer() {
    this.nombre = this.nombreInicial;
    this.edad = this.edadInicial;
  }
}
