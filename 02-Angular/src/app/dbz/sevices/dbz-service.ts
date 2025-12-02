import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/personaje.interface";
import { v4 as uuid } from "uuid";

@Injectable({providedIn: 'root'})
export class DBZService {
    constructor() {}

    public personajes: Personaje[] = [
        { nombre: 'Goku', fuerza: 1500, id: uuid() },
        { nombre: 'Vegeta', fuerza: 850, id: uuid() },
        { nombre: 'Piccolo', fuerza: 700, id: uuid() },
        { nombre: 'Gohan', fuerza: 600, id: uuid() },
        { nombre: 'Trunks', fuerza: 500, id: uuid() },
        { nombre: 'Bulma', fuerza: 1, id: uuid() }
    ];

    public anadirPersonaje(personaje: Personaje) {
        const newPersonaje: Personaje = { ...personaje, id: uuid() };

        this.personajes.push(newPersonaje);
    }

    public borrarPersonaje(index: number) {
        const heroe = this.personajes.splice(index, 1);

        console.log(heroe);
    }
}