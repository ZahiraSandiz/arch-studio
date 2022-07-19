const inputNombre = document.getElementById("formName");
const inputEmail = document.getElementById("formEmail");
const inputMensaje = document.getElementById("formMessage");

const crearMensajeError = (elemento, mensaje) => {
  const elementoPadre = elemento.parentElement;
  let elementoError = elementoPadre.querySelector(
    ".connect-form__input-text--error"
  );

  if (elementoError === null) {
    elemento.classList.add("connect-form__input--error");
    elementoError = document.createElement("span");
    elementoError.innerText = mensaje;
    elementoError.classList.add("connect-form__input-text--error");
    elementoPadre.append(elementoError);
  } else {
    elementoError.innerText = mensaje;
  }
};

const borrarMensajeError = (elemento) => {
  const elementoPadre = elemento.parentElement;

  const errorElement = elementoPadre.querySelector(
    ".connect-form__input-text--error"
  );

  if (errorElement !== null) {
    elementoPadre.removeChild(errorElement);
    elemento.classList.remove("connect-form__input--error");
  }
};

const manejadorKeyUpNombre = (evento) => {
  validadorInputs(evento, 6, 30);
};

const manejadorKeyUpEmail = (evento) => {
  validadorInputs(evento, 10, 40);
};

const manejadorKeyUpMensaje = (evento) => {
  validadorInputs(evento, 10, 150);
};

const validadorInputs = (evento, minimo, maximo) => {
  const input = evento.target;
  const cantidadCaracteres = input.value.length;
  let mensajeError = "";

  if (cantidadCaracteres >= maximo) {
    mensajeError = "You have exceeded maximum number of characters";
    crearMensajeError(input, mensajeError);
  } else if (cantidadCaracteres < minimo && cantidadCaracteres > 0) {
    mensajeError = `This field must be at least ${minimo} characters long`;
    crearMensajeError(input, mensajeError);
  } else if (cantidadCaracteres === 0) {
    mensajeError = "This field can't be empty";
    crearMensajeError(input, mensajeError);
  } else {
    borrarMensajeError(input);
  }
};

inputNombre.addEventListener("keyup", manejadorKeyUpNombre);

inputEmail.addEventListener("keyup", (evento) => {
  const textoIngreso = evento.target.value;
  const elementoPadre = evento.target.parentElement;
  let elementoError = elementoPadre.querySelector(
    ".connect-form__input-text--error"
  );
  const esEmail =
    /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(
      textoIngreso
    );

  if (esEmail) {
    manejadorKeyUpNombre(evento);
  } else {
    if (elementoError === null) {
      evento.target.classList.add("connect-form__input--error");
      elementoError = document.createElement("span");
      elementoError.innerText = "Please use a valid email address";
      elementoError.classList.add("connect-form__input-text--error");
      elementoPadre.append(elementoError);
    } else {
      elementoError.innerText = "Please use a valid email address";
    }
  }
});

inputMensaje.addEventListener("keyup", manejadorKeyUpMensaje);
