interface Alumno {
    nombre: string; // obligatorio
    apellidos: string;
    nacionalidad: string;
    anoNacimiento: Date; // tipo Date
    telefono: number | string; // puede ser número o string
    email: string;
    modulosMatriculados: string[]; // array de strings
    convalidaIPE: boolean;
    nivelPadel?: "Quinta" | "Cuarta" | "Tercera" | "Segunda" | "Primera" | "Profesional"; // opcional
    centroProcedencia?: string; // opcional
}

let alumno1: Alumno = {
    nombre: "Hector",
    apellidos: "Pino Montiel",
    nacionalidad: "Española",
    anoNacimiento: new Date(2001, 6, 14), // mes 6 = mayo (empieza en 0)
    telefono: "123456789",
    email: "hector@hola.com",
    modulosMatriculados: ["DI", "PMDM", "PSP", "EIE"],
    convalidaIPE: true,
    nivelPadel: "Segunda",
    centroProcedencia: "IES Albaytar",
}

let alumno2: Alumno = {
    nombre: "Ana",
    apellidos: "García López",
    nacionalidad: "Española",
    anoNacimiento: new Date(1999, 10, 15),
    telefono: 987654321,
    email: "ana@hola.com",
    modulosMatriculados: ["DI", "PMDM", "PSP", "EIE", "IPE"],
    convalidaIPE: false,
}

/* console.log({alumno1, alumno2}); // Muestra el objeto completo
console.table(alumno1); // Muestra el objeto en formato tabla
console.table(alumno2); */
export {}