const botonOscuro = document.getElementById("switch");
const abrir = document.querySelector('#open');
const cerrar = document.querySelector('#close');
const fondoContenido = document.querySelector('.contenedor-proyectos');
const circulito = document.getElementById("circulito");
const nav = document.querySelector("#contenedor-header");

const modoOscuroActivado = localStorage.getItem("modoOscuro") === "activado";
if (modoOscuroActivado) {
    circulito.classList.add("izquierda"); 
    fondoContenido.classList.add('active');
    nav.classList.add("active");
    abrir.classList.add('active');
    cerrar.classList.add('active');

    
}else{
    circulito.classList.add("derecha");   
}


function darkMode() {
  botonOscuro.classList.toggle("oscuro");


  if (botonOscuro.classList.contains("oscuro")) {
      circulito.classList.remove("derecha");
      circulito.classList.add("izquierda");
      localStorage.setItem("modoOscuro", "activado");
      nav.classList.add("active");
      fondoContenido.classList.add('active');
      abrir.classList.add('active');
    cerrar.classList.add('active');

  } else {
      circulito.classList.add("derecha");
      circulito.classList.remove("izquierda");
      localStorage.setItem("modoOscuro", "desactivado");
      nav.classList.remove("active");
      fondoContenido.classList.remove('active');
      abrir.classList.remove('active');
      cerrar.classList.remove('active');

     
  }
}

botonOscuro.addEventListener('click', darkMode);
