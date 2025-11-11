import { Component, signal } from '@angular/core';
import { ContadorComponent } from "./contador/contador";
import { Heroe } from './heroe/heroe';

@Component({
  selector: 'app-root',
  imports: [ContadorComponent, Heroe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
