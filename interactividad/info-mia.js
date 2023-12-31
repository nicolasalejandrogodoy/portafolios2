const btn = document.getElementById("switch");
const circulito = document.getElementById("circulito");
const nav = document.querySelector("#contenedor-header");
const botonesNavegacion = document.querySelector(".botones-navegacion");
const fondoContenedor = document.querySelector(".contenedor-about");
const sub2 = document.querySelector('.sub2');
const sub3 = document.querySelector('.sub3');
const listaTecnologias = document.querySelector('.listas-tecnologias');

const modoOscuroActivado = localStorage.getItem("modoOscuro") === "activado";
if (modoOscuroActivado) {
    btn.classList.add("oscuro");  // Asegurarse de que la clase "oscuro" se aplique inicialmente
    circulito.classList.add("izquierda"); // También puedes establecer una dirección inicial para el circulito
   fondoContenedor.classList.add("active");
    nav.classList.add("active");
    botonesNavegacion.classList.add("active");
    sub2.classList.add("active");
    sub3.classList.add("active");
    listaTecnologias.classList.add('active');
}else{
    circulito.classList.add("derecha");   

}
function darkMode() {
    btn.classList.toggle("oscuro");
    

    if (btn.classList.contains("oscuro")) {
        circulito.classList.add("izquierda"); 
        circulito.classList.remove("derecha"); 
        localStorage.setItem("modoOscuro", "activado");
        fondoContenedor.classList.add("active");
        nav.classList.add("active");
        botonesNavegacion.classList.add("active");
        sub2.classList.add("active");
    sub3.classList.add("active");
    listaTecnologias.classList.add('active');
       
    } else {
        circulito.classList.add("derecha"); 
        circulito.classList.remove("izquierda"); 
        localStorage.setItem("modoOscuro", "desactivado");
        fondoContenedor.classList.remove("active");
        nav.classList.remove("active");
        botonesNavegacion.classList.remove("active");
        sub2.classList.remove("active");
    sub3.classList.remove("active");
    listaTecnologias.classList.add('active');
    
    }
}

btn.addEventListener('click', darkMode);
