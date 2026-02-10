import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroInterface, Publisher } from '../../interfaces/hero-interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-new-page',
  standalone: false,
  templateUrl: './new-page.html',
  styles: ``,
})
export class NewPageComponent {

  constructor(private heroesService: HeroesService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  get currentHero() {
    const hero = this.heroForm.value as HeroInterface;
    return hero;
  }

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', {nonNullable: true}),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl('')
  });

  public publishers= [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  onSubmit(): void {
    if ( this.heroForm.invalid ) {
      this.heroForm.markAllAsTouched();
      return;
    }
    
    if ( this.currentHero.id ) {
      this.heroesService.updateHero( this.currentHero )
        .subscribe( hero => {
          this.showSnackBar(`${ hero.superhero } actualizado!!`);
        });
        return;
    }

    this.heroesService.addHero( this.currentHero )
      .subscribe( hero => {
        // TODO
        this.showSnackBar(`${ hero.superhero } creado!!`);
      });

  }

  ngOnInit(): void {
    if ( !this.router.url.includes('edit') ) return;

    this.route.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroById(id) )
    )
    .subscribe( hero => {
      if ( !hero ) return this.router.navigate(['/heroes/list']);
      this.heroForm.reset(hero);
      return;
    })

  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'ok!', {
      duration: 2500
    });
  }

  public onDeleteHero() {
    if (!this.currentHero.id) throw Error('La id de heroe es obligatoria');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;

      this.heroesService.deleteHero(this.currentHero.id)
        .subscribe(() => {
          this.showSnackBar('Heroe eliminado');
          this.router.navigate(['/heroes/list']);
        });
    });
  }
}
