const botonUno = document.querySelector(".carousel-control__one");
const botonDos = document.querySelector(".carousel-control__two");
const botonTres = document.querySelector(".carousel-control__three");
const botonCuatro = document.querySelector(".carousel-control__four");

const contenedorSeccionImagenes = document.querySelector(".carousel-container");
const imagenUno = document.querySelector(".carousel-one");
const imagenDos = document.querySelector(".carousel-two");
const imagenTres = document.querySelector(".carousel-three");
const imagenCuatro = document.querySelector(".carousel-four");

const añadirDisplay = () => {};

botonUno.addEventListener("click", (evento) => {
  imagenUno.style.display = "block";
  imagenDos.style.display = "none";
  imagenTres.style.display = "none";
  imagenCuatro.style.display = "none";
});

botonDos.addEventListener("click", (evento) => {
  imagenDos.style.display = "block";
  imagenUno.style.display = "none";
  imagenTres.style.display = "none";
  imagenCuatro.style.display = "none";
});

botonTres.addEventListener("click", (evento) => {
  imagenTres.style.display = "block";
  imagenUno.style.display = "none";
  imagenDos.style.display = "none";
  imagenCuatro.style.display = "none";
});

botonCuatro.addEventListener("click", (evento) => {
  imagenCuatro.style.display = "block";
  imagenUno.style.display = "none";
  imagenDos.style.display = "none";
  imagenTres.style.display = "none";
});
