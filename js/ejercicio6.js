// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para 
// calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

// Ejemplo:
// Input:
// lado A = 24
// lado B = 5

// Output: 58

function calcularPerimetro(base,altura){
    return 2*(base+altura);
}

let A = parseInt(prompt("Ingrese la altura del rectángulo"));
let B = parseInt(prompt("Ingrese la base del rectángulo"));

alert("El perímetro del rectángulo es de "+calcularPerimetro(B,A));
