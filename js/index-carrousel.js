const contenedorBotones = document.querySelector(".carousel-control");
const botonUno = document.querySelector(".carousel-control__one");
const botonDos = document.querySelector(".carousel-control__two");
const botonTres = document.querySelector(".carousel-control__three");
const botonCuatro = document.querySelector(".carousel-control__four");

const contenedorSeccionImagenes = document.querySelector(".carousel-container");
const imagenUno = document.querySelector(".carousel-one");
const imagenDos = document.querySelector(".carousel-two");
const imagenTres = document.querySelector(".carousel-three");
const imagenCuatro = document.querySelector(".carousel-four");

const seleccionarBoton = (boton) => {
  const botones = contenedorBotones.children;
  for (let i = 0; i < botones.length; i++) {
    botones[i].classList.remove("carousel-control--selected");
  }
  boton.classList.add("carousel-control--selected");
};

const añadirDisplay = (evento) => {
  const botonEvento = evento.target;
  const imagenes = document.querySelectorAll(".carousel");
  const botones = document.querySelectorAll(".button-carousel");

  const botonValorDataset = botonEvento.dataset.image;
  console.log(botonValorDataset);

  imagenes.forEach((imagenActual) => {
    const imageValorDataset = imagenActual.dataset.image;
    console.log("hola soy la imagen", imageValorDataset);

    imagenActual.classList.add("carousel-image--display-none");
    imagenActual.classList.remove("carousel-image--display-inline");

    if (imageValorDataset === botonValorDataset) {
      imagenActual.classList.add("carousel-image--display-inline");
      imagenActual.classList.remove("carousel-image--display-none");
    }
  });
};

botonUno.addEventListener("click", (evento) => {
  seleccionarBoton(evento.target);
  añadirDisplay(evento);
});

botonDos.addEventListener("click", (evento) => {
  seleccionarBoton(evento.target);
  añadirDisplay(evento);
});

botonTres.addEventListener("click", (evento) => {
  seleccionarBoton(evento.target);
  añadirDisplay(evento);
});

botonCuatro.addEventListener("click", (evento) => {
  seleccionarBoton(evento.target);
  añadirDisplay(evento);
});
