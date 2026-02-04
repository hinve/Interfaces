import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs';

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  templateUrl: './search-box.html',
  styleUrl: './search-box.css',
})
export class SearchBoxComponent {

  @ViewChild('txtInputEtiqueta')
  public inputEtiqueta!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {

  }

  toTitleCase(word:string):string {
    return word.substring(0,1).toUpperCase() + 
           word.substring(1).toLowerCase();
  }

  buscarEtiqueta() {
    const nuevaEtiqueta = this.toTitleCase(this.inputEtiqueta.nativeElement.value);
    this.gifsService.buscarEtiqueta( nuevaEtiqueta );
    this.inputEtiqueta.nativeElement.value = "";
  }

}
