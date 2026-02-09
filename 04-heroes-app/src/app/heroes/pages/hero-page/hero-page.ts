import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { HeroInterface } from '../../interfaces/hero-interface';


@Component({
  selector: 'app-hero-page',
  standalone: false,
  templateUrl: './hero-page.html',
  styles: ``,
})
export class HeroPageComponent {

  public hero?: HeroInterface;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        //delay(5000),
        switchMap(({ id }) => {
          return this.heroesService.getHeroById(id);
        })
      )
      .subscribe(hero => {
        if ( !hero ) return this.router.navigate(['/heroes/list']);
        this.hero = hero;
        console.log(hero);
        return;
      });
    }
    goBack(): void {
      this.router.navigate(['/heroes/list']);
    }
  }
  
