<<<<<<< HEAD
import { Component, signal } from '@angular/core';
import { ContadorComponent } from "./contador/contador";
import { Heroe } from './heroe/heroe';
import { Instituto } from './instituto/instituto';

@Component({
  selector: 'app-root',
  imports: [ContadorComponent, Heroe, Instituto],
=======
import { Component, NgModule, signal } from '@angular/core';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes.component/heroes.module';
import { DbzModule } from './dbz/dbz-module';


@Component({
  selector: 'app-root',
  imports: [ContadorModule, HeroesModule, DbzModule],
>>>>>>> 5177b6967d3d40c781b08d090f21c0bcc04c9a20
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

}
