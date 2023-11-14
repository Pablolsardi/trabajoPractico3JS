// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla 
// debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function crearTabla(numero){
    document.write(`<h2>Tabla del ${numero}</h2>`);

    document.write(`<table border='1'>`);
    document.write(`<tr>`);
    document.write(`<td>*</td>`);
    document.write(`<td>Resultado</td>`);
    document.write(`</tr>`);
    for(let i=0 ; i<=10 ; i++){
        document.write(`<tr>`);
        for(let j=0 ; j<1 ; j++){
            document.write(`<td>${numero} * ${i}</td>`);
            document.write(`<td>${numero*i}</td>`);
        }
        document.write(`</tr>`);
    }
    document.write(`</table>`);
}

let numeroPrompt = parseInt(prompt("Ingrese un numero para ver su tabla"));
crearTabla(numeroPrompt);