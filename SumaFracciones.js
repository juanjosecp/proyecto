let potenciaTxt = document.getElementById("Potencia");
let FraccionTxt = document.getElementById("Fraccion");
let SumaTxt = document.getElementById("Suma");



let sucesion = 1;
let potenciaDos;
let sumaSucesion = 0;


console.log("Potencia".padEnd(10) + "Fraccion".padEnd(25)+"Suma".padEnd(25));
for (let i = 1; sucesion > 0.000001; i++) {
    potenciaDos = Math.pow(2, i);
    sucesion = 1 / potenciaDos;
    sumaSucesion += sucesion;

    let iTxt = i.toString().padEnd(10);
    let sucesionTxt = sucesion.toString().padEnd(25);
    let sumaSucesionTxt = sumaSucesion.toString().padEnd(25);
    console.log(iTxt + sucesionTxt+sumaSucesionTxt);

    agregarValor(potenciaTxt, i);
    agregarValor(FraccionTxt, sucesionTxt);
    agregarValor(SumaTxt, sumaSucesionTxt);
    
    
}


function agregarValor(columna, valor) {
    
        var p = document.createElement("p");
        p.textContent = valor;
        columna.appendChild(p);
    
}


