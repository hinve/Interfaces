function sumarSinDefinirNada() {
    return 2 + 2
}

/* function sumarSinTipos(a, b) {
    return a + b
}
 */
function sumarConTipos(a: number, b: number) {
    return a + b
}

const sumarNumConFlechas = (a: number, b: number): string => (a+b).toString();

const resultado: number = sumarConTipos(12, 30);

interface Personaje {
    nombre: string;
    pv: number;
    mostrarPv: () => void;
}

const curarPersonaje = (personaje: Personaje, cantidad: number): void => {
    personaje.pv += cantidad;
}

const sayan: Personaje = {
    nombre: 'Vegeta',
    pv: 100,
    mostrarPv() {
        console.log('Puntos de vida', this.pv);
    }
}

curarPersonaje(sayan, 20);
sayan.mostrarPv();

export {}