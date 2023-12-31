const btn = document.getElementById("switch");
const circulito = document.getElementById("circulito");

const fondoContenedor = document.querySelector(".contenedor-presentacion");
const nav = document.querySelector("#contenedor-header");
const botonesNavegacion = document.querySelector(".botones-navegacion");
const foto = document.querySelector('.mi-foto');
const parrafo = document.querySelector(".parrafo");
const nombre = document.querySelector('.nombre');
const redes = document.querySelector(".fa-github");


const modoOscuroActivado = localStorage.getItem("modoOscuro") === "activado";
if (modoOscuroActivado) {
    circulito.classList.add("izquierda"); // También puedes establecer una dirección inicial para el circulito
   fondoContenedor.classList.add("active");
    nav.classList.add("active");
    botonesNavegacion.classList.add("active");
    foto.classList.add("active");
    parrafo.classList.add("active");
    nombre.classList.add('active');
    redes.classList.add("active");
}else{
    circulito.classList.add("derecha");   
}



function darkMode() {
    btn.classList.toggle("oscuro");
  

    if (btn.classList.contains("oscuro")) {
        circulito.classList.remove("derecha");
        circulito.classList.add("izquierda");
        localStorage.setItem("modoOscuro", "activado");
        fondoContenedor.classList.add("active");
        nav.classList.add("active");
        botonesNavegacion.classList.add("active");
        foto.classList.add("active");
        nombre.classList.add('active');
        parrafo.classList.add("active");
        redes.classList.add("active");
    } else {
        circulito.classList.add("derecha");
        circulito.classList.remove("izquierda");
        localStorage.setItem("modoOscuro", "desactivado");
        fondoContenedor.classList.remove("active");
        nav.classList.remove("active");
        botonesNavegacion.classList.remove("active");
        nombre.classList.remove("active");
        foto.classList.remove("active");
        parrafo.classList.remove("active");
        redes.classList.remove("active");
    }
}

btn.addEventListener('click', darkMode);
