// Suma de dos números
function sumar(a: number, b?: number): number {
    if (b == undefined) {
        return a + a;
    } else {
        return a + b;
    }
}

// Resta de dos números
function restar(a: number, b?: number): number {
    if (b == undefined) {
        return a - a;
    } else {
        return a - b;
    }
}

// Multiplicación de dos números
function multiplicar(a: number, b?: number): number {
    if (b == undefined) {
        return a * a;
    } else {
        return a * b;
    }
}

// División de dos números
function dividir(a: number, b?: number): number {
    if (b == undefined) {
        return a / a;
    } else {
        return a / b;
    }
}

console.log("Suma:", sumar(10, 5)); // 15
console.log("Resta:", restar(10, 5)); // 5
console.log("Multiplicación:", multiplicar(10, 5)); // 50
console.log("División:", dividir(10, 5)); // 2
console.log("Suma con un solo argumento:", sumar(10)); // 20
console.log("Resta con un solo argumento:", restar(10)); // 0
console.log("Multiplicación con un solo argumento:", multiplicar(10)); // 100
console.log("División con un solo argumento:", dividir(10)); // 1

export {}