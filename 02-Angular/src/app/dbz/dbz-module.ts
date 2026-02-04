import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { Lista } from './components/lista/lista';
import { AddPersonaje } from './components/add-personaje/add-personaje';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainPageComponent, Lista, AddPersonaje],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [MainPageComponent]
})
export class DbzModule { }
