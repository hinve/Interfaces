/* A partir del documento anexo, tenemos que crear un fichero .ts que realice desestructuración en 3 puntos de nuestro fichero original.
Tened en cuenta que lo interesante al desestructurar es quedarnos tan sólo con lo que nos hace falta:
- Cuando recibimos parámetros en las funciones
- Cuando creamos una variable a partir de una función
- Cuando vamos a acceder a un dato en alguna estructura de control */

interface Producto {
    descripcion: string;
    precio: number;
}

const telefono: Producto = {
    descripcion: 'iPhone 15 Pro',
    precio: 1000
};

const tablet: Producto = {
    descripcion: 'iPad Air 3',
    precio: 500
};

interface CalculaImpuestoOpciones {
    impuesto: number;
    productos: Producto[];
}

// 1. DESESTRUCTURACIÓN EN PARÁMETROS DE FUNCIÓN
function calcularImpuesto({ impuesto, productos }: CalculaImpuestoOpciones): number[] {
    let total = 0;
    
    // 3. DESESTRUCTURACIÓN EN ESTRUCTURA DE CONTROL (forEach)
    productos.forEach(({ precio }) => {
        total += precio;
    });
    
    return [total, total * impuesto];
}

const carritoCompra = [telefono, tablet];
const impuesto = 0.21;

const resultado = calcularImpuesto({productos: carritoCompra, impuesto});

// 2. DESESTRUCTURACIÓN AL CREAR VARIABLE A PARTIR DE FUNCIÓN
const [total, totalConImpuesto] = resultado;

console.log(`Total: ${total}, Total Impuesto: ${totalConImpuesto}`);

export {};