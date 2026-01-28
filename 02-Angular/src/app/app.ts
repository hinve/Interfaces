import { Component, signal } from '@angular/core';
import { ContadorComponent } from "./contador/contador";
import { Heroe } from './heroe/heroe';
import { Instituto } from './instituto/instituto';

@Component({
  selector: 'app-root',
  imports: [ContadorComponent, Heroe, Instituto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
