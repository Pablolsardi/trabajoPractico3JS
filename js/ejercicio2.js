const ciudades = [];
let ciudad;

do{
    ciudad = prompt("Ingrese una ciudad");
    if(ciudad!=null){
        ciudades.push(ciudad);
    }
}while(ciudad!=null)

document.write(`<p>El arreglo tiene ${ciudades.length} elementos</p>`);
document.write(`<ul>`);
document.write(`<li>Elemento 1er posición: ${ciudades[0]}</li>`);
document.write(`<li>Elemento 3er posición: ${ciudades[2]}</li>`);
document.write(`<li>Elemento última posición: ${ciudades[(ciudades.length)-1]}</li>`);

ciudades.push('París, Francia');
document.write(`<br><li>Elemento nuevo última posición: ${ciudades[(ciudades.length)-1]}</li>`);
document.write(`<li>Elemento actual segunda posición: ${ciudades[1]}</li>`);
document.write(`</ul>`);

ciudades[1] = 'Barcelona, España';

document.write(`<h2>Arreglo de ciudades</h2>`);
document.write(`<ul>`);
for (let iCiudades = 0 ; iCiudades<ciudades.length ; iCiudades++){
    document.write(`<li>${ciudades[iCiudades]}</li>`);
}
document.write(`</ul>`);   