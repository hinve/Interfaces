/* 
    Objetivo: Hacer uso del modulo de instituto
    Autor: Héctor Pino Montiel
    Fecha: 14/10/2025
 */

import { type Alumno, type Instituto, type Ensenanza, matricularAlumno, mostrarAlumnos, direccionInstituto } from "./t9modulo-instituto.ts";

let eso: Ensenanza = {
    nivel: 'ESO',
    esObligatoria: true,
    familiaProfesional: undefined,
    asistencia: 'Manana'
}

let bachillerato: Ensenanza = {
    nivel: 'BACHILLERATO',
    esObligatoria: false,
    familiaProfesional: undefined,
    asistencia: 'Manana'
}

let fp: Ensenanza = {
    nivel: 'FP',
    esObligatoria: false,
    familiaProfesional: 'DAM',
    asistencia: 'Tarde'
}

let alumno: Alumno = {
    nombre: "Juan Pérez",
    edad: 16,
    sexo: 'H',
    enseñanza: eso,
    direccion: {
        calle: "Calle Falsa 123",
        cp: 28080,
        localidad: "Rivendel",
        provincia: "Eriador"
    }
}

let alumno2: Alumno = {
    nombre: "María López",
    edad: 17,
    sexo: 'M',
    enseñanza: bachillerato,
    direccion: {
        calle: "Avenida Siempre Viva 742",
        cp: 28080,
        localidad: "Malaga",
        provincia: "Malaga"
    }
}

let instituto: Instituto = {
    nombre: "IES Playamar",
    director: "Ana García",
    telefono: "912345678",
    correo: "hola@gmail.com",
    direccion: {
        calle: "Rda. Alta de Benyamina, 17",
        cp: 29620,
        localidad: "Torremolinos",
        provincia: "Malaga"
    },
    listadoAlumnos: [alumno, alumno2]
}

matricularAlumno(instituto, alumno);
mostrarAlumnos(instituto);
direccionInstituto(instituto);