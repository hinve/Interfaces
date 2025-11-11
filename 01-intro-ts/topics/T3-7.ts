/* 
    Objetivo: Aprender a desestructurar Arrays
    Autor: Héctor Pino Montiel
    Fecha: 08/10/2025
 */


/// Crear un listado de matrículas de alumnos de FP (array), con los siguientes datos:

    /**
     * matriculaAlumno.
     * @param nombre - Nombre del alumno.
     * @param apellidos - Apellidos del alumno.
     * @param modulos - Array de módulos profesionales.
     * @param expediente - Array de objetos con curso y nota media.
     */
interface matriculaAlumno {
    nombre: string;
    apellidos: string;
    modulos: string[]; //! Array de strings
    expediente: expediente[]; //! Aqui tambien hacer un array de objetos
}

    /**
     * expediente.
     * @param curso - Curso (1º DAM, 2º DAM).
     * @param notaMedia - Nota media del curso.
     */
export interface expediente {
    curso: string;
    notaMedia: number;
}


/// Objeto de 3 alumnos diferentes
const grupoDe3Alumnos: matriculaAlumno[] = [
    {
        nombre: "Héctor",
        apellidos: "Pino Montiel",
        modulos: ["DI", "ING", "PSP", "IPE"], //! Array de strings
        expediente: [ //! Array de objetos
            {
                curso: "1º DAM",
                notaMedia: 8.5
            },
            {
                curso: "2º DAM",
                notaMedia: 10.0
            }
        ]
    },
    {
        nombre: "Naiara",
        apellidos: "Lopez Martin",
        modulos: ["DI", "ING", "PSP", "EIE"], //! Array de strings
        expediente: [ //! Array de objetos
            {
                curso: "1º DAM",
                notaMedia: 9.0
            },
            {
                curso: "2º DAM",
                notaMedia: 9.5
            }
        ]
    },
    {
        nombre: "Carlos",
        apellidos: "Sanchez Ruiz",
        modulos: ["DI", "ING", "PSP", "IPE"], //! Array de strings
        expediente: [ //! Array de objetos
            {
                curso: "1º DAM",
                notaMedia: 6
            },
            {
                curso: "2º DAM",
                notaMedia: 7
            }
        ]
    }
];

/// Desestructuración del segundo alumno, primer módulo y segunda nota media

const [, segundoAlumno] = grupoDe3Alumnos; // Aqui creo una variable segundoAlumno con el segundo alumno.
const { nombre, apellidos, modulos, expediente } = segundoAlumno // Aqui desestructuro el objeto segundoAlumno
const [primerModulo] = modulos; // Aqui saco el primer modulo de la variable modulos q saque antes
const [ , segundoExp] = expediente; // Aqui saco el segundo objeto del array expediente


// Aqui lo enseño por consola en forma de tabla
//! Cuidado porque me estaba equivocando recogiendo los datos sin desestructurar (grupoDe3Alumnos[1] ...)
/* console.table([{
    Alumno2Array: `${nombre} ${apellidos}`,
    PrimerModulo2Alumno: primerModulo,
    CursoYNota: `${segundoExp.curso} - ${segundoExp.notaMedia}`
}]); */