/* 
    Objetivo: Trabajar genericos.
    Autor: Héctor Pino Montiel
    Fecha: 04/11/2025
 */

/**
 * direccion.
 * @param calle - Calle de la dirección.
 * @param cp - Código postal.
 * @param localidad - Localidad.
 * @param provincia - Provincia.
 */
interface direccion {
    calle: string;
    cp: string;
    localidad: string;
    provincia: string;
}

/**
 * Persona genérica.
 * @param nombre - Nombre de la persona.
 * @param apellidos - Apellidos de la persona.
 * @param telefono - Teléfono de contacto de la persona.
 * @param genero - Género de la persona (opcional).
 * @param direccion - Dirección de la persona (opcional).
 */
class Persona {
    nombre: string;
    apellidos: string;
    genero?: string;
    telefono: string;
    direccion?: direccion;

    constructor(nombre: string, apellidos: string, telefono: string, genero?: string, direccion?: direccion) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.genero = genero;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}

/**
 * Árbitro de padel.
 * @param nombre - Nombre del árbitro.
 * @param apellidos - Apellidos del árbitro.
 * @param telefono - Teléfono de contacto del árbitro.
 * @param numeroColegiado - Número de colegiado del árbitro.
 * @param genero - Género del árbitro (opcional).
 * @param direccion - Dirección del árbitro (opcional).
 */
class Arbitro extends Persona {
    numeroColegiado: number;

    constructor(nombre: string, apellidos: string, telefono: string, numeroColegiado: number, genero?: string, direccion?: direccion) {
        super(nombre, apellidos, telefono, genero, direccion);
        this.numeroColegiado = numeroColegiado;
    }
}

/**
 * Jugador de padel.
 * @param nombre - Nombre del jugador.
 * @param apellidos - Apellidos del jugador.
 * @param telefono - Teléfono de contacto del jugador.
 * @param categoria - Categoría del jugador (1 a 6).
 * @param genero - Género del jugador (opcional).
 * @param direccion - Dirección del jugador (opcional).
 */
class Jugador extends Persona {
    categoria: 1 | 2 | 3 | 4 | 5 | 6;

    constructor(nombre: string, apellidos: string, telefono: string, categoria: 1 | 2 | 3 | 4 | 5 | 6, genero?: string, direccion?: direccion) {
        super(nombre, apellidos, telefono, genero, direccion);
        this.categoria = categoria;
    }  
}

/**
 * Equipo de padel formado por dos jugadores.
 * @param nombre - Nombre del equipo.
 * @param jugadores - Array de dos jugadores que forman el equipo.
 */
class Equipo {
    nombre: string;
    jugadores: Jugador[];

    constructor(
        nombre: string,
        jugadores: Jugador[],
    ) {
        this.nombre = nombre;
        this.jugadores = jugadores;
        if (jugadores.length == 2) {
            this.jugadores = jugadores;
        } else {
            throw new Error("Un equipo debe tener exactamente 2 jugadores.");
        }
    }
}

/**
 * Calendario de los partidos del mes de la liga de padel.
 * @param listaPartidos - Lista de partidos programados.
 */
class Calendario {
    listaPartidos: Partido[]
    constructor(listaPartidos: Partido[]) {
        this.listaPartidos = listaPartidos;
    }
}

/**
 * Partido de padel entre dos equipos.
 * @param equipoLocal - Equipo local.
 * @param equipoVisitante - Equipo visitante.
 * @param arbitro - Árbitro del partido.
 * @param fecha - Fecha del partido.
 * @param resultado - Resultado del partido (opcional).
 */
class Partido {
    equipoLocal: Equipo;
    equipoVisitante: Equipo;
    arbitro: Arbitro;
    fecha: Date;
    resultado?: Set<number>[];

    constructor(equipoLocal: Equipo, equipoVisitante: Equipo, arbitro: Arbitro, fecha: Date, resultado?: Set<number>[]) {
        this.equipoLocal = equipoLocal;
        this.equipoVisitante = equipoVisitante;
        this.arbitro = arbitro;
        this.fecha = fecha;
        this.resultado = resultado;
    }
}

/// Crear instancias de las clases para probar su funcionamiento

// Equipo 1
const jugador1 = new Jugador("Héctor", "Pino Montiel", "123456789", 3, "Masculino");
const jugador2 = new Jugador("Naiara", "Lopez Martin", "987654321", 4, "Femenino");
// Equipo 2
const jugador3 = new Jugador("Carlos", "Sanchez Ruiz", "555555555", 2, "Masculino");
const jugador4 = new Jugador("Laura", "Gomez Diaz", "444444444", 5, "Femenino");
// Equipo 3
const jugador5 = new Jugador("Miguel", "Torres Lopez", "333333333", 1, "Masculino");
const jugador6 = new Jugador("Ana", "Martinez Ruiz", "222222222", 6, "Femenino");

// Equipos
const equipoA = new Equipo("Los guapos", [jugador1, jugador2]);
const equipoB = new Equipo("Los putos", [jugador3, jugador4]);
const equipoC = new Equipo("Los weones", [jugador5, jugador6]);

// Árbitro 1
const arbitro1 = new Arbitro("Luis", "Fernandez Garcia", "111111111", 12, "Masculino"); 
// Árbitro 2
const arbitro2 = new Arbitro("Marta", "Lopez Sanchez", "999999999", 77, "Femenino");

// Partidos
const partido1 = new Partido(equipoA, equipoB, arbitro1, new Date("2025-11-01T10:00:00"));
const partido2 = new Partido(equipoB, equipoC, arbitro2, new Date("2025-11-27T15:00:00"));
const partido3 = new Partido(equipoC, equipoA, arbitro1, new Date("2025-11-03T12:00:00"));
const partido4 = new Partido(equipoA, equipoC, arbitro2, new Date("2025-10-05T11:00:00"), [new Set<number>([6, 4]), new Set<number>([3, 6]), new Set<number>([6, 2])]);

// Calendario
const calendarioTorneo = new Calendario([partido1, partido2, partido3]);

// Mostrar arrays genericos
function mostrarArray<T>(arr: T[]) {
    arr.forEach((element, index) => {
        console.log(`Elemento ${index + 1}`, element);
    });
}

// listado con calendario de partidos
console.log("------------------------------");
console.log("Calendario de partidos:");
mostrarArray(calendarioTorneo.listaPartidos);
console.log("------------------------------");

// listado con todos los jugadores del campeonato
console.log("------------------------------");
console.log("Listado de jugadores del campeonato:");
let listado = [equipoA.jugadores, equipoB.jugadores, equipoC.jugadores].flat();
mostrarArray(listado);
console.log("------------------------------");

export {}