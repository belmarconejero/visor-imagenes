var alarcon = document.getElementById('alarcon')
var belmonte = document.getElementById('belmonte')
var huete = document.getElementById('huete')
var sisante = document.getElementById('sisante')
var sanclemente = document.getElementById('sanclemente')
var riocabriel = document.getElementById('riocabriel')
var display = document.getElementById('display')

alarcon.addEventListener('click',cargaImagen)
function cargaImagen(){
    display.querySelector('#display img').src = alarcon.src;
    display.querySelector('#display h2').innerHTML = alarcon.name;
    display.querySelector('#display p').innerHTML = alarcon.title;
}
belmonte.addEventListener('click',cargaImagen1)
function cargaImagen1(){
    display.querySelector('#display img').src = belmonte.src;
    display.querySelector('#display h2').innerHTML = belmonte.name;
    display.querySelector('#display p').innerHTML = belmonte.title;
}
huete.addEventListener('click',cargaImagen2)
function cargaImagen2(){
    display.querySelector('#display img').src = huete.src;
    display.querySelector('#display h2').innerHTML = huete.name;
    display.querySelector('#display p').innerHTML = huete.title;
}
sisante.addEventListener('click',cargaImagen3)
function cargaImagen3(){
    display.querySelector('#display img').src = sisante.src;
    display.querySelector('#display h2').innerHTML = sisante.name;
    display.querySelector('#display p').innerHTML = sisante.title;
}
sanclemente.addEventListener('click',cargaImagen4)
function cargaImagen4(){
    display.querySelector('#display img').src = sanclemente.src;
    display.querySelector('#display h2').innerHTML = sanclemente.name;
    display.querySelector('#display p').innerHTML = sanclemente.title;
}
riocabriel.addEventListener('click',cargaImagen5)
function cargaImagen5(){
    display.querySelector('#display img').src = riocabriel.src;
    display.querySelector('#display h2').innerHTML = riocabriel.name;
    display.querySelector('#display p').innerHTML = riocabriel.title;
}