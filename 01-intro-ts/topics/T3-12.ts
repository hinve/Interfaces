/* 
    Objetivo: Usar herencia y composicion.
    Autor: Héctor Pino Montiel
    Fecha: 28/10/2025
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

// Obtener el mes y año del primer partido para el calendario
const primerPartido = calendarioTorneo.listaPartidos[0];
const mes = primerPartido.fecha.getMonth();
const año = primerPartido.fecha.getFullYear();

// Obtener días con partidos
const diasConPartidos = new Set(
    calendarioTorneo.listaPartidos
        .filter(partido => partido.fecha.getMonth() === mes && partido.fecha.getFullYear() === año)
        .map(partido => partido.fecha.getDate())
);

const diasEnMes = new Date(año, mes + 1, 0).getDate();
console.log(`\n--- Calendario de ${new Date(año, mes).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })} ---`);
console.log("+---+---+---+---+---+---+---+");
console.log("| L | M | X | J | V | S | D |");
console.log("+---+---+---+---+---+---+---+");

// Obtener el día de la semana del primer día del mes (0=domingo, 1=lunes, etc)
const primerDiaSemana = new Date(año, mes, 1).getDay();
const inicioSemana = primerDiaSemana === 0 ? 6 : primerDiaSemana - 1; // Convertir para que lunes sea 0

let fila = "|";

// Numeros correspondientes a los días previos al inicio del mes
let count = 27;
for (let i = 0; i < inicioSemana; i++) {
    fila += count++ + " |";
}

count = 1;
let marca: string;

// Días del mes
for (let dia = 1; dia <= diasEnMes; dia++) {
    if (diasConPartidos.has(dia)) {
        marca = " X ";
    } else {
        marca = dia < 10 ? ` ${dia} ` : `${dia} `;
    }
    fila += marca + "|";
    // Nueva fila cada 7 días
    if ((dia + inicioSemana) % 7 === 0) {
        console.log(fila);
        console.log("+---+---+---+---+---+---+---+");
        fila = "|";
    }
}

// Mostrar detalles de los partidos
console.log("\nPartidos programados:");
calendarioTorneo.listaPartidos.forEach((partido, i) => {
    console.log(`${i + 1}. ${partido.equipoLocal.nombre} vs ${partido.equipoVisitante.nombre}`);
    console.log(`   Fecha: ${partido.fecha.toLocaleDateString('es-ES')}`);
    console.log(`   Árbitro: ${partido.arbitro.nombre} ${partido.arbitro.apellidos}`);
    console.log(`   Resultado: ${partido.resultado || "Pendiente"}`);
    console.log();
});

// El ultimo partido resulto asi:
console.log('---------------------------');
console.log('El primer partido de la temporada resulto asi:');
console.log(`${partido4.equipoLocal.nombre} vs ${partido4.equipoVisitante.nombre}`);
console.log(`Fecha: ${partido4.fecha.toLocaleDateString('es-ES')}`);
console.log(`Árbitro: ${partido4.arbitro.nombre} ${partido4.arbitro.apellidos}`);
console.log(`Numero de sets: ${partido4.resultado?.length}`);

let locales = 0;
let visitantes = 0;
partido4.resultado?.forEach((set, index) => {
    const [local , visitante] = Array.from(set);
    console.log(`   Set ${index + 1}: ${local} - ${visitante}`);
    if (local > visitante) {
        locales++;
    } else {
        visitantes++;
    }
});
console.log('Ganaron ' + (locales > visitantes ? partido4.equipoLocal.nombre + "(Local)" : partido4.equipoVisitante.nombre + "(Visitante)"));
console.log('---------------------------');