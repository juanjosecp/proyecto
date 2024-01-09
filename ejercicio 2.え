function productoInterno(a, b) {
    if (a.length !== b.length) {
        return "Los vectores deben tener la misma longitud.";
    }

    let resultado = 0;
    for (let i = 0; i < a.length; i++) {
        resultado += a[i] * b[i];
    }

    return resultado;
}

let a = [];
let b = [];

console.log("Ingrese el vector a:");
for (let i = 0; i < 3; i++) {
    a.push(parseInt(prompt()));
}

console.log("a:", a);

console.log("Ingrese el vector b:");
for (let i = 0; i < 3; i++) {
    b.push(parseInt(prompt()));
}

console.log("b:", b);

let resultado = productoInterno(a, b);
console.log("Producto interno entre a y b:", resultado);
