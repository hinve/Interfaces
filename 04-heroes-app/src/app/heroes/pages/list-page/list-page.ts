import { Component, OnInit } from '@angular/core';
import { HeroInterface } from '../../interfaces/hero-interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  standalone: false,
  templateUrl: './list-page.html',
  styles: ``,
})
export class ListPageComponent implements OnInit {

  public heroes: HeroInterface[] = [];

  constructor(private heroesService: HeroesService) {}
  
  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
      console.log(this.heroes);
    });
  }
}
