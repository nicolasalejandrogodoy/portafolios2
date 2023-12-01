const btn = document.getElementById("switch");
const circulito = document.getElementById("circulito");

const fondoContenedor = document.querySelector(".contenedor-presentacion");
const nav = document.querySelector("#contenedor-header");
const botonesNavegacion = document.querySelector(".botones-navegacion");
const parrafo = document.querySelector(".parrafo");
const redes = document.querySelector(".fa-github");


function cambiarPropiedades(){
    circulito.classList.toggle("derecha")
    circulito.classList.toggle("izquierda")
    btn.classList.toggle("claro")
    btn.classList.toggle("oscuro")
   fondoContenedor.classList.toggle("active");
    nav.classList.toggle("active");
    botonesNavegacion.classList.toggle("active");
    parrafo.classList.toggle("active");
    redes.classList.toggle("active");

};


btn.addEventListener("click",cambiarPropiedades);

