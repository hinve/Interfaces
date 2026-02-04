import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HeroInterface } from '../../interfaces/hero-interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.html',
  styles: ``,
  standalone: false
})
export class CardComponent implements OnInit {
  @Input()
  public hero!: HeroInterface;

  ngOnInit(): void {
    if(!this.hero) throw new Error('Hero property is required');
  }
}
