import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  standalone: false,
  templateUrl: './layout-page.html',
  styles: ``,
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: "./list" },
    { label: 'Nuevo', icon: 'add_circle', url: "./new-hero" },
    { label: 'Buscar', icon: 'search', url: "./search" },
  ]
}