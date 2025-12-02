import { NgModule } from "@angular/core";
import { Heroe } from "./component/heroe/heroe";
import { ListaHeroes } from "./component/lista-heroes/lista-heroes";

@NgModule({
  declarations: [Heroe, ListaHeroes],
  exports: [Heroe, ListaHeroes]
})
export class HeroesModule {

}
