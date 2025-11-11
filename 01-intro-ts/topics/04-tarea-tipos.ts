/*
    ===== Código de TypeScript =====
*/

/// Creo la interfaz para SuperHero, con las propiedades y
/// el metodo que necesito
/**
 * SuperHero.
 *
 * @param name - Nombre del superhéroe.
 * @param age - Edad en años.
 * @param address - Dirección (tipo Address).
 * @param showAddress - Método que devuelve la dirección formateada.
 */
interface SuperHero {
    
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

// Decidi que estaria mas encapsulado y ordenado si hago otra interface para la direccion
/**
 * Address.
 *
 * @param calle - Calle.
 * @param pais - País.
 * @param ciudad - Ciudad.
 */
interface Address {
    calle: string;
    pais: string;
    ciudad: string;
}

//! Aqui abajo estaba el error, era que no tenia la interfaz creada.
const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};