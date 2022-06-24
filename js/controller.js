let title = document.getElementById('title');
console.log(title);

//CONTROLANDO ETIQUETAS
//1. CAMBIAR EL TEXTO DE UNA ETIQUETA
//SOLO APLICA H1---,P.A

title.textContent="Hasta Luego";

//2. CAMBIAR LA IMAGEN (O FUENTE)
let photo = document.getElementById('photo');
photo.src="https://cdn2.unrealengine.com/egs-godofwar-santamonicastudio-ic1-400x400-5819bbf696c5.png?h=270&resize=1&w=480";

//3. AGREGANDO ESTILOS
title.classList.add("letra");

//4. DETECTANDO EVENTOS
let button = document.getElementById('button');
button.addEventListener('click',function(){
    console.log('Hace Clic');
});








