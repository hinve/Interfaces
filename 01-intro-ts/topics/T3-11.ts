/* 
    Objetivo: Usar herencia.
    Autor: Héctor Pino Montiel
    Fecha: 28/10/2025
 */

/// Crear una clase Persona
class Persona {
    nombre: string;
    apellidos: string;
    edad: number;
    localidad: string;
    sexo?: string;

    constructor(nombre: string, apellidos: string, edad: number, localidad: string, sexo?: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.localidad = localidad;
        this.sexo = sexo;
    }
}

/// Crear una clase Profesor que herede de Persona
class Profesor extends Persona {
    centro: string;
    especialidad: string;
    departamento: string;

    constructor(nombre: string, apellidos: string, edad: number, localidad: string, centro: string, especialidad: string, departamento: string, sexo?: string) {
        super(nombre, apellidos, edad, localidad, sexo);
        this.centro = centro;
        this.especialidad = especialidad;
        this.departamento = departamento;
    }
}

/// Crear una clase Alumno que extiends de Persona
class Alumno extends Persona {
    centro: string;
    curso: string;
    asignaturas: string[];

    constructor(nombre: string, apellidos: string, edad: number, localidad: string, centro: string, curso: string, asignaturas: string[], sexo?: string) {
        super(nombre, apellidos, edad, localidad, sexo);
        this.centro = centro;
        this.curso = curso;
        this.asignaturas = asignaturas;
    }
}

/// Crear instancias de Profesor y Alumno
const profesor1 = new Profesor(
    "Héctor",
    "Pino Montiel",
    30,
    "Sevilla",
    "IES Sevilla",
    "Informática",
    "Tecnologías de la Información",
    "Masculino"
);

const alumno1 = new Alumno(
    "Naiara",
    "Lopez Martin",
    20,
    "Madrid",
    "IES Madrid",
    "2º DAM",
    ["DI", "ING", "PSP", "EIE"],
    "Femenino"
);

/// Mostrar los datos por consola
console.log("Datos del Profesor:");
console.log(`Nombre: ${profesor1.nombre}`);
console.log(`Apellidos: ${profesor1.apellidos}`);
console.log(`Edad: ${profesor1.edad}`);
console.log(`Localidad: ${profesor1.localidad}`);
console.log(`Sexo: ${profesor1.sexo ? profesor1.sexo : "No especificado"}`);
console.log(`Centro: ${profesor1.centro}`);
console.log(`Especialidad: ${profesor1.especialidad}`);
console.log(`Departamento: ${profesor1.departamento}`);
console.log("---------------------------");
console.log("Datos del Alumno:");
console.log(`Nombre: ${alumno1.nombre}`);
console.log(`Apellidos: ${alumno1.apellidos}`);
console.log(`Edad: ${alumno1.edad}`);
console.log(`Localidad: ${alumno1.localidad}`);
console.log(`Sexo: ${alumno1.sexo ? alumno1.sexo : "No especificado"}`);
console.log(`Centro: ${alumno1.centro}`);
console.log(`Curso: ${alumno1.curso}`);
console.log(`Asignaturas: ${alumno1.asignaturas.join(", ")}`);

export {};