/* 
    Objetivo: Crear clases y mostrar sus datos haciendo uso de otras clases ya hechas antes.
    Autor: Héctor Pino Montiel
    Fecha: 28/10/2025
 */

import { type expediente } from "./T3-7.ts";

/// Clase Estudiante 

class Estudiante {
    nombre: string;
    apellidos: string;
    edad: number;
    localidad: string;
    sexo?: string;
    expediente: expediente;

    constructor(nombre: string, apellidos: string, edad: number, localidad: string, expediente: expediente, sexo?: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.localidad = localidad;
        this.sexo = sexo;
        this.expediente = expediente;
    }
}

/// Crear dos instancias de la clase Estudiante

const estudiante1 = new Estudiante(
    "Héctor",
    "Pino Montiel",
    22,
    "Sevilla",
    {
        curso: "2º DAM",
        notaMedia: 9.5
    },
    "Si porfa"
);

const estudiante2 = new Estudiante(
    "Naiara",
    "Lopez Martin",
    21,
    "Madrid",
    {
        curso: "Estetica",
        notaMedia: 10.0
    }
);

/// Mostrar los datos por consola
console.log("Datos del Estudiante 1:");
console.log(`Nombre: ${estudiante1.nombre}`);
console.log(`Apellidos: ${estudiante1.apellidos}`);
console.log(`Edad: ${estudiante1.edad}`);
console.log(`Localidad: ${estudiante1.localidad}`);
console.log(`Sexo: ${estudiante1.sexo ? estudiante1.sexo : "No especificado"}`);
console.log(`Expediente: Curso - ${estudiante1.expediente.curso}, Nota Media - ${estudiante1.expediente.notaMedia}`);
console.log("---------------------------");
console.log("Datos del Estudiante 2:");
console.log(`Nombre: ${estudiante2.nombre}`);
console.log(`Apellidos: ${estudiante2.apellidos}`);
console.log(`Edad: ${estudiante2.edad}`);
console.log(`Localidad: ${estudiante2.localidad}`);
console.log(`Sexo: ${estudiante2.sexo ? estudiante2.sexo : "No especificado"}`);
console.log(`Expediente: Curso - ${estudiante2.expediente.curso}, Nota Media - ${estudiante2.expediente.notaMedia}`);

/// Clase Instituto
class Instituto {
    centro: string;
    localidad: string;
    listadoEstudiantes: Estudiante[];

    constructor(centro: string, localidad: string, listadoEstudiantes: Estudiante[]) {
        this.centro = centro;
        this.localidad = localidad;
        this.listadoEstudiantes = listadoEstudiantes;
    }
}

/// Crear una instancia de la clase Instituto
const instituto = new Instituto(
    "IES Playamar",
    "Torremolinos",
    [estudiante1, estudiante2]
);

/// Mostrar los datos
console.log("---------------------------");
console.log(`Instituto: ${instituto.centro}, Localidad: ${instituto.localidad}`);
console.log("Listado de Estudiantes:");
instituto.listadoEstudiantes.forEach((estudiante, index) => {
    console.log(`Estudiante ${index + 1}: ${estudiante.nombre} ${estudiante.apellidos}`);
});

export {};