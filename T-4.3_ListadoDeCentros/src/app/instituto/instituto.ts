import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instituto',
  imports: [],
  templateUrl: './instituto.html',
  styleUrl: './instituto.css',
})
export class Instituto {
  @Input() nombre: string = '';
  @Input() localidad: string = '';
  @Input() logo: string = '';
}
