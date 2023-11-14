// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una 
// cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

let numeroPrompt;

function esPar(numero){
    if(numero%2 == 0){
        return 'es par';
    }else{
        return 'es impar';
    }
}

numeroPrompt = prompt("Ingrese un numero");

document.write(`<p>Su número ${esPar(numeroPrompt)}</p>`)