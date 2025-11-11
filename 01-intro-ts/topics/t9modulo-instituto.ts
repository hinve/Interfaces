/* 
    Objetivo: Crear un módulo que gestione la información de un instituto educativo.
    Autor: Héctor Pino Montiel
    Fecha: 14/10/2025
 */

/*
    Interfaces
*/

    /**
     * Direccion
     * @param calle Calle del instituto o alumno
     * @param cp Código postal
     * @param localidad Localidad
     * @param provincia Provincia
     */
interface Direccion {
    calle: string,
    cp: number,
    localidad: string,
    provincia: string
}

    /**
     * Instituto
     * @param nombre Nombre del instituto
     * @param director Nombre del director
     * @param telefono Teléfono de contacto
     * @param correo Correo electrónico
     * @param direccion Dirección del instituto
     * @param listadoAlumnos Listado de alumnos matriculados
     */
export interface Instituto {
    nombre: string,
    director: string,
    telefono: string,
    correo: string,
    direccion: Direccion,
    listadoAlumnos: Alumno[]
}

    /**
     * Alumno
     * @param nombre Nombre del alumno
     * @param edad Edad del alumno
     * @param sexo Sexo del alumno ('H' para hombre, 'M' para mujer)
     * @param enseñanza Nivel de enseñanza ('ESO', 'BACHILLERATO', 'FP')
     * @param direccion Dirección del alumno
     */
export interface Alumno {
    nombre: string,
    edad: number,
    sexo: 'H' | 'M',
    enseñanza: Ensenanza,
    direccion: Direccion
}

    /**
     * Enseñanza
     * @param nivel Nivel de enseñanza ('ESO', 'BACHILLERATO', 'FP')
     * @param esObligatoria Indica si la enseñanza es obligatoria
     * @param familiaProfesional Familia profesional (solo para FP)
     * @param asistencia Turno de asistencia ('Mañana', 'Tarde', 'Noche')
     */
export interface Ensenanza {
    nivel: 'ESO' | 'BACHILLERATO' | 'FP',
    esObligatoria: boolean,
    familiaProfesional?: string,
    asistencia: 'Manana' | 'Tarde' | 'Noche'
}

/*
    Funciones
*/

    // Funcion para matricular un alumno en un instituto en concreto
export function matricularAlumno(instituto: Instituto, alumno: Alumno): void {
    instituto.listadoAlumnos.push(alumno);
}

    // Funcion para mostrar el listado de alumnos de un instituto
export function mostrarAlumnos(instituto: Instituto): void {
    const { nombre, listadoAlumnos } = instituto;
    console.log(`Alumnos del instituto ${nombre}:`);
    console.table(listadoAlumnos);
}

    // Funcion para mostrar la direccion del instituto
export function direccionInstituto(instituto: Instituto): void {
    const { nombre, direccion } = instituto;
    console.log(`Direccion del instituto: ${nombre}`);
    console.table(direccion);
}