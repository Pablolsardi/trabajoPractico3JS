const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

document.write(`<h2>Lista de Meses</h2>`);
document.write(`<ul>`);
for (let iMeses = 0 ; iMeses<meses.length ; iMeses++){
    document.write(`<li>${meses[iMeses]}</li>`);
}
document.write(`</ul>`);   
