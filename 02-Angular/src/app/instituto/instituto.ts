import { Component } from '@angular/core';

@Component({
  selector: 'app-instituto',
  imports: [],
  templateUrl: './instituto.html',
  styleUrl: './instituto.css',
})
export class Instituto {
  nombre: string = 'IES Playamar';
  localidad: string = 'Torremolinos';
  familia: string = 'Informática y Comunicaciones';
  centro: string = 'Público';
  logo: string = 'https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png';

  cambiarCole() {
    if (this.nombre === 'IES Playamar') {
      this.nombre = 'IES Jacaranda';
      this.localidad = 'Benalmádena';
      this.familia = 'Administración y Gestión';
      this.centro = 'Concertado';
      this.logo = 'https://pbs.twimg.com/profile_images/3059231666/21dd362313c922734bf3297b69b2da14.jpeg';
    } else {
      this.nombre = 'IES Playamar';
      this.localidad = 'Torremolinos';
      this.familia = 'Informática y Comunicaciones';
      this.centro = 'Público';
      this.logo = 'https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png';
    }
  }
}
