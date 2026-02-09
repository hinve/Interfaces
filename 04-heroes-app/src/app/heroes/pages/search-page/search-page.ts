import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroInterface } from '../../interfaces/hero-interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.html',
  styles: ``,
  standalone: false
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public heroes: HeroInterface[] = [];
  public selectedHero?: HeroInterface;

  constructor(private heroeService: HeroesService) {

  }
  public searchHero() {
    const value: string = this.searchInput.value || '';
    this.heroeService.getSuggestions(value).subscribe(
      respHeroes => this.heroes = respHeroes
    )
  }

  public onSelectedOption(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return
    }

    const hero: HeroInterface = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero = hero;
  }

}
