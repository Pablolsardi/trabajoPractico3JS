let dado1;
let dado2;
let suma;
const cantidades = [];

// Inicializo todos los elementos del array en 0
for(let iArray=0 ; iArray<11; iArray++){
    cantidades[iArray] = 0;
}

// Hago las 50 tiradas de dados
for(let iTiradas=0 ; iTiradas<50 ; iTiradas++){
    dado1 = Math.floor(Math.random() * (7 - 1) + 1);
    dado2 = Math.floor(Math.random() * (7 - 1) + 1);

    suma = dado1 + dado2;

    // Recorro el array para encontrar el numero y aumentarlo en 1
    for(let iArray=0 ; iArray<11; iArray++){
        if((suma-2)==iArray){
            cantidades[iArray] = cantidades[iArray]+1;
        }
    }
}

for(let iArray=0 ; iArray<11; iArray++){
    document.write(`El número ${iArray+2} se obtuvo ${cantidades[iArray]} veces <br>`)
}

