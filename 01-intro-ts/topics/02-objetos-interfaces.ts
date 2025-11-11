let habilidades = ['Velocidad', 'Fuerza', 'Agilidad'];
let habilidades2 = ['Velocidad', 'Fuerza', 'Agilidad', 100, true];
let habilidades3: (string | number | boolean)[] = ['Velocidad', 'Fuerza', 'Agilidad', 100, true];

const personaje = {
    nombre: 'Hector',
    pv: 100,
    habilidades: ['Fuerza', 'Velocidad'],
}

interface Personaje {
    nombre: string;
    pv: number;
    habilidades: string[];
    procedencia?: string;
}

const vampiro: Personaje = {
    nombre: "Miguel",
    pv: 440,
    habilidades: ['Transformacion', 'Volar'],
    procedencia: "Cartama",
}

/* console.log({vampiro});
console.table(vampiro);
 */
export {};