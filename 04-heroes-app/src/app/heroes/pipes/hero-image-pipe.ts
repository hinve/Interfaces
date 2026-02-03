import { Pipe, PipeTransform } from '@angular/core';
import { HeroInterface } from '../interfaces/hero-interface';

@Pipe({
  name: 'heroImage',
  standalone: false
})
export class HeroImagePipe implements PipeTransform {

  transform(hero: HeroInterface): string {
    if (!hero.id && !hero.alt_img) {
      return 'assets/no-image.png';
    }

    if (hero.alt_img) {
      return hero.alt_img;
    }

    return `assets/heroes/${hero.id}.jpg`;
  }

}
