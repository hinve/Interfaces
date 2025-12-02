import { Component, OnInit } from '@angular/core';
import { Lista } from '../components/lista/lista';
import { AddPersonaje } from "../components/add-personaje/add-personaje";
import { Personaje } from '../interfaces/personaje.interface';
import { DBZService } from '../sevices/dbz-service';

@Component({
    selector: 'app-dbz-main',
    templateUrl: 'main-page.component.html',
    standalone: false
})

export class MainPageComponent {
    constructor(public dbzservice: DBZService) {}
}