const navegacion = document.querySelector('.contenedor-header');
const botonCerrar= document.querySelector('#close');
const botonAbrir = document.querySelector('#open');



botonAbrir.addEventListener('click', function() {
    navegacion.classList.toggle('oculto');
    navegacion.classList.toggle('visible');
   botonAbrir.classList.add('oculto');
   botonAbrir.classList.remove('visible');
   botonCerrar.classList.add('visible');
   botonCerrar.classList.remove('oculto');
});

botonCerrar.addEventListener('click', function() {
    navegacion.classList.toggle('visible');
    navegacion.classList.toggle('oculto');
    botonAbrir.classList.remove('oculto');
   botonAbrir.classList.add('visible');
   botonCerrar.classList.toggle('visible');
   botonCerrar.classList.toggle('oculto');
});