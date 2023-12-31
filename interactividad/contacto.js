const btn = document.getElementById('button');
const botonOscuro = document.getElementById("switch");

const fondoContenido = document.querySelector('.contenidos');
const circulito = document.getElementById("circulito");
const nav = document.querySelector("#contenedor-header");
const colorLabel = document.querySelectorAll('.texto'); 

const modoOscuroActivado = localStorage.getItem("modoOscuro") === "activado";
if (modoOscuroActivado) {
    circulito.classList.add("izquierda"); // También puedes establecer una dirección inicial para el circulito
    fondoContenido.classList.add('active');
    nav.classList.add("active");

    colorLabel.forEach(label => {
      label.classList.add('active');
  });
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
      colorLabel.forEach(label => {
        label.classList.add('active');
    });
     
  } else {
      circulito.classList.add("derecha");
      circulito.classList.remove("izquierda");
      localStorage.setItem("modoOscuro", "desactivado");
      nav.classList.remove("active");
      fondoContenido.classList.remove('active');
      colorLabel.forEach(label => {
        label.classList.remove('active');
    });

     
  }
}

botonOscuro.addEventListener('click', darkMode);



document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_0tzxak5';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});