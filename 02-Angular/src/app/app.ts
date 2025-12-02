import { Component, NgModule, signal } from '@angular/core';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes.component/heroes.module';
import { DbzModule } from './dbz/dbz-module';


@Component({
  selector: 'app-root',
  imports: [ContadorModule, HeroesModule, DbzModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

}
