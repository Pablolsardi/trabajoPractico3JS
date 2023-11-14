// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir 
// de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por 
// minúsculas o por una mezcla de ambas.

function reconocerMayus(cadena){
    let cadenaToLower = cadena.toLowerCase();
    let cadenaToUpper = cadena.toUpperCase();
    
    if(cadena===cadenaToLower){
        return 'tiene solo minúsculas';
    }
    if(cadena===cadenaToUpper){
        return 'tiene solo mayúsculas';
    }
    if(cadena!==cadenaToUpper && cadena!==cadenaToLower){
        return 'tiene mayúsculas y minúsculas';
    }
}

let cadena = prompt("Ingrese una cadena de texto");
document.write(`<p>La cadena ${reconocerMayus(cadena)}</p>`);