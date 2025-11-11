/* 
    Objetivo: Aprender a usar interfaces y estructuras en TypeScript
    Autor: Héctor Pino Montiel
    Fecha: 08/10/2025
 */

/// Creo las interfaces necesarias para el ejercicio

    /**
     * AlumnadoFP.
     * @param nombre - Nombre del alumno.
     * @param localidad - Donde reside.
     * @param codigoCentro - Código del centro educativo.
     * @param telefono - Teléfono de contacto (opcional).
     */
interface CentroEducativo {
    nombre: string;
    localidad: string;
    codigoCentro: string;
    telefono?: string;
}

    /**
     * Matricula.
     * @param cicloFormativo - Nombre del ciclo formativo.
     * @param modulosProfesionales - Array de módulos profesionales.
     * @param centroEducativo - Centro educativo (tipo CentroEducativo).
     * @param curso - Curso (opcional).
     */
interface Matricula {
    cicloFormativo: string;
    modulosProfesionales: string[]; // array de nombres de módulos profesionales
    centroEducativo: CentroEducativo;
    curso?: string;
}


    /**
     * AlumnadoFP.
     * @param nombre - Nombre del alumno.
     * @param apellidos - Apellidos del alumno.
     * @param anioNacimiento - Año de nacimiento.
     * @param nacionalidad - Nacionalidad del alumno.
     * @param matricula - Matrícula (tipo Matricula).
     */
interface AlumnadoFP {
    nombre: string;
    apellidos: string;
    anioNacimiento: number;
    nacionalidad: string;
    matricula: Matricula;
}

/// Crear objeto que cumpla con la interfaz AlumnadoFP

const alumno: AlumnadoFP = {
    nombre: "Héctor",
    apellidos: "Pino Montiel",
    anioNacimiento: 2001,
    nacionalidad: "Español",
    matricula: {
        cicloFormativo: "Desarrollo de Aplicaciones Multiplataforma",
        modulosProfesionales: ["DI", "ING", "PSP", "IPE"],
        centroEducativo: {
            nombre: "IES Playamar",
            localidad: "Torremolinos",
            codigoCentro: "29012345",
            telefono: "123456789"
        }
    }
}

//! Cuidado aqui, importante usar table como pide el enunciado
console.table(alumno);

/// Crear objeto con desestructuración
const alumno2: AlumnadoFP = {
    nombre: "Naiara",
    apellidos: "Lopez Martin",
    anioNacimiento: 1999,
    nacionalidad: "Española",
    matricula: {
        cicloFormativo: "Desarrollo de Aplicaciones Multiplataforma",
        modulosProfesionales: ["DI", "ING", "PSP"],
        centroEducativo: {
            nombre: "IES Albaytar",
            localidad: "Benalmadena",
            codigoCentro: "29054321",
            telefono: "987654321"
        }
    }
}

//! Cuidado con sacar mas datos de los que necesitas.
const { nombre, apellidos } = alumno2;
const { cicloFormativo } = alumno2.matricula;
const { nombre: nombreCentro } = alumno2.matricula.centroEducativo;

/// Usar console.table para mostrar la información requerida
/// Alumno: Nombre + Apellidos
/// Ciclo Formativo: Ciclo Formativo
/// Centro: Centro

//! Para que se vea en el mismo indice de la tabla, hay que meterlo en un array
console.table([{
    Alumno: `${nombre} ${apellidos}`,
    "Ciclo Formativo": cicloFormativo,
    Centro: nombreCentro
}]);
