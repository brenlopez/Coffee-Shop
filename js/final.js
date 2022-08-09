"use strict";
/* LOPEZ, BRENDA DENISSE */

let aProductos = [
  {
    nombre: "Frappuccino",
    precio: 320,
    imagen: "imagenes/frappuccino.jpg",
    descripcion: "Frappuccino de café, crema, leche y caramelo.",
    categoria: "bebida",
    codigo: "frappe",
  },
  {
    nombre: "Brownies de chocolate",
    precio: 250,
    imagen: "imagenes/brownie.jpg",
    descripcion: "Brownies de chocolate con nueces y almendras.",
    categoria: "dulce",
    codigo: "brown",
  },
  {
    nombre: "Frappuccino con chocolate",
    precio: 350,
    imagen: "imagenes/frappuccinoChoc.jpg",
    descripcion: "Frappuccino con café, crema y galletitas de chocolate.",
    categoria: "bebida",
    codigo: "frappeChoco",
  },
  {
    nombre: "Croissant",
    precio: 150,
    imagen: "imagenes/medialuna.jpg",
    descripcion: "Croissant hojaldrado de manteca estilo casero.",
    categoria: "dulce",
    codigo: "croissant",
  },
  {
    nombre: "Batido de Frutilla",
    precio: 250,
    imagen: "imagenes/batido.png",
    descripcion: "Batido de frutillas naturales, leche y crema.",
    categoria: "bebida",
    codigo: "frutilla",
  },
  {
    nombre: "Cupcake de vainilla",
    precio: 200,
    imagen: "imagenes/cupcake.jpg",
    descripcion: "Cupcakes de vainilla con crema chantilly.",
    categoria: "dulce",
    codigo: "muffin",
  },
  {
    nombre: "Galletitas con chips",
    precio: 120,
    imagen: "imagenes/galletitas.jpg",
    descripcion: "Galletitas de manteca con chips de chocolate.",
    categoria: "dulce",
    codigo: "galle",
  },
  {
    nombre: "Tostado de Jamón y queso",
    precio: 300,
    imagen: "imagenes/tostado.jpg",
    descripcion: "Sandwich tostado con jamón y queso.",
    categoria: "salado",
    codigo: "tostadoJQ",
  },
  {
    nombre: "Bagel salado",
    precio: 400,
    imagen: "imagenes/bagel.jpg",
    descripcion: "Bagel con salmón, lechuga y queso crema.",
    categoria: "salado",
    codigo: "salmon",
  },
  {
    nombre: "Cold Brew",
    precio: 280,
    imagen: "imagenes/coldBrew.jpg",
    descripcion: "Café frío con hielo, leche, crema batido y vainilla.",
    categoria: "bebida",
    codigo: "cold",
  },
  {
    nombre: "Sandwich de salvado",
    precio: 390,
    imagen: "imagenes/sandwich.jpg",
    descripcion: "Sandwich con salmón, lechuga, tomate y queso.",
    categoria: "salado",
    codigo: "salvado",
  },
  {
    nombre: "Sandwich con palta",
    precio: 350,
    imagen: "imagenes/sandwich2.jpg",
    descripcion: "Sandwich de salvado con palta, huevo y rúcula.",
    categoria: "salado",
    codigo: "palta",
  },
];

let botonCarrito = document.getElementById("botonCarrito");
let divProductos = document.getElementById("productos");
let navegacion = document.getElementById("navegacion");
let h2 = document.getElementById("h2");
let contUnidades = 0;

// Catálogo

for (let producto of aProductos) {
  let ruta = producto.imagen;
  let alt = producto.descripcion;
  let descripcion = producto.descripcion;
  let nombre = producto.nombre;
  let valor = producto.precio;
  let categoria = producto.categoria;
  let codigo = producto.codigo;

  let divCard = document.createElement("div");
  divCard.setAttribute("class", "card col-lg-3 col-md-6 " + categoria);
  let img = document.createElement("img");
  img.setAttribute("src", ruta);
  img.setAttribute("alt", alt);
  img.setAttribute("data-code", codigo);
  divCard.appendChild(img);
  let divInfo = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.innerHTML = nombre;
  divInfo.appendChild(h3);
  divCard.appendChild(divInfo);
  divProductos.appendChild(divCard);
  let p = document.createElement("p");
  p.innerHTML = descripcion;
  divInfo.appendChild(p);
  let pPrecio = document.createElement("p");
  pPrecio.innerHTML = `$${valor}`;
  divInfo.appendChild(pPrecio);
  let boton = document.createElement("button");
  boton.setAttribute("class", "btn btn-dark addCarrito");
  boton.setAttribute("data-id", nombre);
  boton.setAttribute("data-val", valor);
  boton.innerHTML = "Agregar al carrito";
  divInfo.appendChild(boton);
  divCard.appendChild(divInfo);
  divProductos.appendChild(divCard);
}

// Ventana Modal - Productos

let imagenes = divProductos.querySelectorAll(".card img");

function Ampliar() {
  let url = this.dataset.code;
  let getHermano = this.nextElementSibling;
  let titulo = getHermano.firstChild;
  let descripcion = titulo.nextElementSibling;
  let precio = descripcion.nextElementSibling;
  let btnComprar = precio.nextElementSibling;

  let fondo = document.createElement("div");
  fondo.setAttribute("id", "modalProducto");
  divProductos.appendChild(fondo);
  let modal = document.createElement("div");
  modal.setAttribute("class", "card");
  fondo.appendChild(modal);
  let buttonCerrar = document.createElement("button");
  buttonCerrar.setAttribute("id", "cerrarProducto");
  buttonCerrar.setAttribute("class", "btn btn-light");
  buttonCerrar.innerHTML = "X";
  modal.appendChild(buttonCerrar);
  let imagen = document.createElement("div");
  imagen.setAttribute("id", "imagen");
  imagen.style.cssText = `background-image: url(imagenes/${url}.jpg);`;
  modal.appendChild(imagen);
  let btnIzq = document.createElement("button");
  btnIzq.setAttribute("id", "izquierda");
  btnIzq.setAttribute("class", "btn");
  btnIzq.disabled = true;
  imagen.appendChild(btnIzq);
  let btnDer = document.createElement("button");
  btnDer.setAttribute("id", "derecha");
  btnDer.setAttribute("class", "btn");
  imagen.appendChild(btnDer);
  let info = document.createElement("div");
  info.setAttribute("id", "info");
  modal.appendChild(info);
  let h3 = document.createElement("h3");
  h3.innerHTML = titulo.textContent;
  info.appendChild(h3);
  let detalle = document.createElement("p");
  detalle.innerHTML = descripcion.textContent;
  info.appendChild(detalle);
  let valor = document.createElement("p");
  valor.innerHTML = precio.textContent;
  info.appendChild(valor);
  let botonComprar = document.createElement("button");
  botonComprar.innerHTML = btnComprar.textContent;
  botonComprar.setAttribute("data-id", btnComprar.dataset.id);
  botonComprar.setAttribute("data-val", btnComprar.dataset.val);
  botonComprar.setAttribute("class", "btn btn-dark");
  info.appendChild(botonComprar);

  function Cerrar() {
    fondo.remove();
  }

  function DeslizarDer() {
    imagen.style.cssText = `background-image: url(imagenes/${url}2.jpg);`;
    btnDer.disabled = true;
    btnIzq.disabled = false;
  }

  function DeslizarIzq() {
    imagen.style.cssText = `background-image: url(imagenes/${url}.jpg);`;
    btnDer.disabled = false;
    btnIzq.disabled = true;
  }

  window.addEventListener("keydown", function (e) {
    if (e.code == "ArrowRight") {
      DeslizarDer();
    } else if (e.code == "ArrowLeft") {
      DeslizarIzq();
    } else if (e.code == "Escape") {
      Cerrar();
    }
  });

  buttonCerrar.onclick = Cerrar;
  btnDer.onclick = DeslizarDer;
  btnIzq.onclick = DeslizarIzq;
  botonComprar.onclick = agregarProducto;
}

imagenes.forEach((imagen) => imagen.addEventListener("click", Ampliar));

// Categorías

let cards = divProductos.querySelectorAll(".card");

navegacion.addEventListener("click", (e) => {
  for (let prod of cards) {
    prod.style.display = "none";
    if (e.target.textContent == "Bebidas") {
      h2.innerHTML = "Todas las bebidas";
      if (prod.className == "card col-lg-3 col-md-6 bebida") {
        prod.style.display = "block";
      }
    } else if (e.target.textContent == "Dulce") {
      h2.innerHTML = "Productos dulces";
      if (prod.className == "card col-lg-3 col-md-6 dulce") {
        prod.style.display = "block";
      }
    } else if (e.target.textContent == "Salado") {
      h2.innerHTML = "Productos salados";
      if (prod.className == "card col-lg-3 col-md-6 salado") {
        prod.style.display = "block";
      }
    } else if (e.target.textContent == "Todos") {
      h2.innerHTML = "Todos los productos";
      prod.style.display = "block";
    }
  }
});

// Banner Publicitario

function cerrarModal() {
  let modal = document.getElementById("modal");
  if (modal) {
    modal.remove();
  }
}

// Creación de Carrito

let divCarrito = document.getElementById("carrito");
let botonCerrar = document.createElement("button");
botonCerrar.setAttribute("id", "cerrar");
botonCerrar.setAttribute("class", "btn");
botonCerrar.innerHTML = "X";
divCarrito.appendChild(botonCerrar);
let tituloCarrito = document.createElement("h3");
tituloCarrito.innerHTML = "Lista de productos";
divCarrito.appendChild(tituloCarrito);
let listaCarrito = document.createElement("div");
listaCarrito.setAttribute("class", "list-group");
listaCarrito.setAttribute("id", "listaCarrito");
divCarrito.appendChild(listaCarrito);
let total = document.createElement("p");
total.innerHTML = "Total $";
total.setAttribute("id", "totalCarrito");
divCarrito.appendChild(total);
let valorTotal = document.createElement("span");
valorTotal.innerHTML = 0;
total.appendChild(valorTotal);
let vaciar = document.createElement("button");
vaciar.setAttribute("id", "vaciar");
vaciar.setAttribute("class", "btn btn-outline-dark");
vaciar.innerHTML = "Vaciar carrito";
vaciar.disabled = true;
divCarrito.appendChild(vaciar);
let comprar = document.createElement("button");
comprar.setAttribute("id", "comprar");
comprar.setAttribute("class", "btn btn-dark");
comprar.innerHTML = "Finalizar compra";
comprar.disabled = true;
divCarrito.appendChild(comprar);
divCarrito.style.display = "none";

function Cerrar() {
  divCarrito.setAttribute("style", "display: none;");
}
function Abrir() {
  divCarrito.setAttribute("style", "display: block;");
}

botonCerrar.onclick = Cerrar;
botonCarrito.onclick = Abrir;

// LocalStorage

let carrito = {
  productos: [],
  cantidad: [],
  precio: [],
  total: 0,
};

if (localStorage.carrito) {
  carrito = JSON.parse(localStorage.carrito);
} else {
  localStorage.carrito = JSON.stringify(carrito);
}

// Recargar carrito

if (carrito.total !== 0) {
  contUnidades = carrito.cantidad.reduce(
    (numero, cantActual) => numero + cantActual
  );
  botonCarrito.innerHTML = `${contUnidades} items`;

  for (let i = 0; i < carrito.productos.length; i++) {
    let divItem = document.createElement("div");
    divItem.setAttribute("class", `list-group-item`);
    divItem.setAttribute("data-id", carrito.productos[i]);
    listaCarrito.appendChild(divItem);
    let nombreProd = document.createElement("h4");
    nombreProd.innerHTML = carrito.productos[i];
    divItem.appendChild(nombreProd);
    let btnBorrar = document.createElement("button");
    btnBorrar.innerHTML = "X";
    btnBorrar.setAttribute("class", "borrarTodo btn");
    btnBorrar.setAttribute("data-id", carrito.productos[i]);
    btnBorrar.setAttribute("data-val", carrito.precio[i]);
    divItem.appendChild(btnBorrar);
    let pPrecio = document.createElement("p");
    pPrecio.innerHTML = `$${carrito.precio[i]}`;
    pPrecio.setAttribute("class", "precio");
    divItem.appendChild(pPrecio);
    let divCantidad = document.createElement("div");
    divCantidad.setAttribute("class", "cantidad");
    divItem.appendChild(divCantidad);
    let btnAgregar = document.createElement("button");
    btnAgregar.setAttribute("class", `btn-dark agregar`);
    btnAgregar.setAttribute("data-id", carrito.productos[i]);
    btnAgregar.setAttribute("data-val", carrito.precio[i]);
    btnAgregar.innerHTML = "+";
    divCantidad.appendChild(btnAgregar);
    let unidad = document.createElement("p");
    unidad.innerHTML = carrito.cantidad[i];
    divCantidad.appendChild(unidad);
    let btnQuitar = document.createElement("button");
    btnQuitar.setAttribute("class", `btn-dark quitar`);
    btnQuitar.setAttribute("data-id", carrito.productos[i]);
    btnQuitar.setAttribute("data-val", carrito.precio[i]);
    btnQuitar.innerHTML = "-";
    divCantidad.appendChild(btnQuitar);
    let subtotal = document.createElement("p");
    subtotal.setAttribute("class", "subtotal");
    let valorSubtotal = carrito.precio[i] * carrito.cantidad[i];
    subtotal.innerHTML = `Subtotal: $${valorSubtotal}`;
    divItem.appendChild(subtotal);
    vaciar.disabled = false;
    comprar.disabled = false;
  }
  valorTotal.innerHTML = carrito.total;
}

// Agregar y quitar del carrito

let botones = divProductos.querySelectorAll("button");

let agregarProducto = (e) => {
  let id = e.target.dataset.id;
  let val = parseInt(e.target.dataset.val);
  let indice = carrito.productos.indexOf(id);

  if (indice != -1) {
    carrito.cantidad[indice]++;

    let p = listaCarrito.querySelector(`div[data-id="${id}"] .cantidad p`);
    p.innerHTML = carrito.cantidad[indice];

    let valorSubtotal = carrito.cantidad[indice] * val;
    let subtotal = listaCarrito.querySelector(`div[data-id="${id}"] .subtotal`);
    subtotal.innerHTML = `Subtotal: $${valorSubtotal}`;
  } else {
    carrito.productos.push(id);
    carrito.cantidad.push(1);
    carrito.precio.push(val);

    let divItem = document.createElement("div");
    divItem.setAttribute("class", `list-group-item`);
    divItem.setAttribute("data-id", id);
    listaCarrito.appendChild(divItem);
    let nombreProd = document.createElement("h4");
    nombreProd.innerHTML = id;
    divItem.appendChild(nombreProd);
    let btnBorrar = document.createElement("button");
    btnBorrar.innerHTML = "X";
    btnBorrar.setAttribute("class", "borrarTodo btn");
    btnBorrar.setAttribute("data-id", id);
    btnBorrar.setAttribute("data-val", val);
    divItem.appendChild(btnBorrar);
    let pPrecio = document.createElement("p");
    pPrecio.innerHTML = `$${val}`;
    pPrecio.setAttribute("class", "precio");
    divItem.appendChild(pPrecio);
    let divCantidad = document.createElement("div");
    divCantidad.setAttribute("class", "cantidad");
    divItem.appendChild(divCantidad);
    let btnAgregar = document.createElement("button");
    btnAgregar.setAttribute("class", `btn-dark agregar`);
    btnAgregar.setAttribute("data-id", id);
    btnAgregar.setAttribute("data-val", val);
    btnAgregar.innerHTML = "+";
    divCantidad.appendChild(btnAgregar);
    let unidad = document.createElement("p");
    unidad.innerHTML = 1;
    divCantidad.appendChild(unidad);
    let btnQuitar = document.createElement("button");
    btnQuitar.setAttribute("class", `btn-dark quitar`);
    btnQuitar.setAttribute("data-id", id);
    btnQuitar.setAttribute("data-val", val);
    btnQuitar.innerHTML = "-";
    divCantidad.appendChild(btnQuitar);
    let subtotal = document.createElement("p");
    subtotal.setAttribute("class", "subtotal");
    subtotal.innerHTML = `Subtotal: $${val}`;
    divItem.appendChild(subtotal);
    vaciar.disabled = false;
    comprar.disabled = false;
  }
  carrito.total = parseInt(carrito.total) + val;
  localStorage.carrito = JSON.stringify(carrito);
  valorTotal.innerHTML = carrito.total;

  contUnidades++;
  botonCarrito.innerHTML = `${contUnidades} items`;
};

botones.forEach((btn) => btn.addEventListener("click", agregarProducto));

listaCarrito.addEventListener("click", (e) => {
  let btnSumar = document.querySelectorAll(".agregar");
  let btnRestar = document.querySelectorAll(".quitar");
  let btnEliminar = document.querySelectorAll(".borrarTodo");

  for (let btnMas of btnSumar) {
    if (e.target == btnMas) {
      agregarProducto(e);
    }
  }
  for (let btnMenos of btnRestar) {
    if (e.target == btnMenos) {
      let id = e.target.dataset.id;
      let val = parseInt(e.target.dataset.val);
      let indice = carrito.productos.indexOf(id);
      let subtotal = listaCarrito.querySelector(
        `div[data-id="${id}"] .subtotal`
      );

      if (indice != -1) {
        if (carrito.cantidad[indice] > 0) {
          carrito.cantidad[indice]--;

          let valorSubtotal = carrito.cantidad[indice] * val;
          subtotal.innerHTML = `Subtotal: $${valorSubtotal}`;

          let cant = e.target.previousElementSibling;
          cant.innerHTML = carrito.cantidad[indice];

          botonCarrito.innerHTML = `${contUnidades} items`;
          if (carrito.cantidad[indice] == 0) {
            let getDiv = e.target.parentNode;
            carrito.productos.splice([indice], 1);
            carrito.cantidad.splice([indice], 1);
            carrito.precio.splice([indice], 1);
            listaCarrito.removeChild(getDiv.parentNode);
          }
          carrito.total = parseInt(carrito.total) - val;
          contUnidades--;
          botonCarrito.innerHTML = `${contUnidades} items`;
        }
        if (carrito.cantidad == 0) {
          vaciar.disabled = true;
          comprar.disabled = true;
        }
      }

      localStorage.carrito = JSON.stringify(carrito);
      valorTotal.innerHTML = carrito.total;
    }
  }
  for (let eliminar of btnEliminar) {
    if (e.target == eliminar) {
      let val = eliminar.dataset.val;
      let id = eliminar.dataset.id;
      let index = carrito.productos.indexOf(id);

      carrito.total = parseInt(carrito.total) - val * carrito.cantidad[index];
      carrito.productos.splice([index], 1);
      carrito.cantidad.splice([index], 1);
      carrito.precio.splice([index], 1);
      listaCarrito.removeChild(eliminar.parentNode);

      localStorage.carrito = JSON.stringify(carrito);
      valorTotal.innerHTML = carrito.total;

      if (carrito.total == 0) {
        contUnidades = 0;
        botonCarrito.innerHTML = `${contUnidades} items`;
        vaciar.disabled = true;
        comprar.disabled = true;
      } else {
        contUnidades = carrito.cantidad.reduce(
          (numero, cantActual) => numero + cantActual
        );
        botonCarrito.innerHTML = `${contUnidades} items`;
      }
    }
  }
});

vaciar.onclick = function () {
  localStorage.clear();
  location.reload();
};

// Checkout

comprar.onclick = function () {
  divCarrito.style.display = "none";
  let divBg = document.createElement("div");
  divBg.setAttribute("id", "fondo");
  divProductos.appendChild(divBg);
  let divCheckout = document.createElement("div");
  divCheckout.setAttribute("id", "resumen");
  divBg.appendChild(divCheckout);
  let h2Checkout = document.createElement("h2");
  h2Checkout.innerHTML = "Check out";
  divCheckout.appendChild(h2Checkout);
  let form = document.createElement("form");
  form.setAttribute("action", "");
  form.setAttribute("method", "post");
  form.setAttribute("enctype", "application/x-www-form-urlencoded");
  divCheckout.appendChild(form);
  let fieldsetInfo = document.createElement("fieldset");
  form.appendChild(fieldsetInfo);
  let legendInfo = document.createElement("legend");
  legendInfo.innerHTML = "Información Personal";
  fieldsetInfo.appendChild(legendInfo);
  let inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("name", "nombre");
  inputName.setAttribute("placeholder", "Nombre");
  inputName.setAttribute("class", "form-control");
  inputName.setAttribute("required", "");
  fieldsetInfo.appendChild(inputName);
  let inputApellido = document.createElement("input");
  inputApellido.setAttribute("type", "text");
  inputApellido.setAttribute("name", "apellido");
  inputApellido.setAttribute("placeholder", "Apellido");
  inputApellido.setAttribute("class", "form-control");
  inputApellido.setAttribute("required", "");
  fieldsetInfo.appendChild(inputApellido);
  let inputCorreo = document.createElement("input");
  inputCorreo.setAttribute("type", "email");
  inputCorreo.setAttribute("name", "correo");
  inputCorreo.setAttribute("placeholder", "Email");
  inputCorreo.setAttribute("class", "form-control");
  inputCorreo.setAttribute("required", "");
  fieldsetInfo.appendChild(inputCorreo);
  let inputTel = document.createElement("input");
  inputTel.setAttribute("type", "text");
  inputTel.setAttribute("name", "telefono");
  inputTel.setAttribute("placeholder", "Teléfono");
  inputTel.setAttribute("class", "form-control");
  fieldsetInfo.appendChild(inputTel);
  let fieldsetPedido = document.createElement("fieldset");
  form.appendChild(fieldsetPedido);
  let legendPedido = document.createElement("legend");
  legendPedido.innerHTML = "Entrega del pedido";
  fieldsetPedido.appendChild(legendPedido);
  let inputDir = document.createElement("input");
  inputDir.setAttribute("type", "text");
  inputDir.setAttribute("name", "direccion");
  inputDir.setAttribute("placeholder", "Dirección");
  inputDir.setAttribute("class", "form-control");
  inputDir.setAttribute("required", "");
  fieldsetPedido.appendChild(inputDir);
  let inputFecha = document.createElement("input");
  inputFecha.setAttribute("type", "date");
  inputFecha.setAttribute("class", "form-control");
  inputFecha.setAttribute("required", "");
  fieldsetPedido.appendChild(inputFecha);
  let fieldsetPago = document.createElement("fieldset");
  form.appendChild(fieldsetPago);
  let legendPago = document.createElement("legend");
  legendPago.innerHTML = "Datos de Pago";
  fieldsetPago.appendChild(legendPago);
  let divRadio1 = document.createElement("div");
  divRadio1.setAttribute("class", "radio");
  fieldsetPago.appendChild(divRadio1);
  let radioEfectivo = document.createElement("input");
  radioEfectivo.setAttribute("type", "radio");
  radioEfectivo.setAttribute("name", "pago");
  radioEfectivo.setAttribute("id", "efectivo");
  radioEfectivo.setAttribute("class", "form-check-input");
  radioEfectivo.setAttribute("value", "efectivo");
  divRadio1.appendChild(radioEfectivo);
  let labelEfectivo = document.createElement("label");
  labelEfectivo.setAttribute("class", "form-check-label");
  labelEfectivo.setAttribute("for", "efectivo");
  labelEfectivo.innerHTML = "Efectivo";
  divRadio1.appendChild(labelEfectivo);
  let divRadio2 = document.createElement("div");
  divRadio2.setAttribute("class", "radio");
  fieldsetPago.appendChild(divRadio2);
  let radioDebito = document.createElement("input");
  radioDebito.setAttribute("type", "radio");
  radioDebito.setAttribute("name", "pago");
  radioDebito.setAttribute("id", "debito");
  radioDebito.setAttribute("class", "form-check-input");
  radioDebito.setAttribute("value", "debito");
  divRadio2.appendChild(radioDebito);
  let labelDebito = document.createElement("label");
  labelDebito.setAttribute("class", "form-check-label");
  labelDebito.setAttribute("for", "debito");
  labelDebito.innerHTML = "Tarjeta de Débito";
  divRadio2.appendChild(labelDebito);
  let divRadio3 = document.createElement("div");
  divRadio3.setAttribute("class", "radio");
  fieldsetPago.appendChild(divRadio3);
  let radioCredito = document.createElement("input");
  radioCredito.setAttribute("type", "radio");
  radioCredito.setAttribute("name", "pago");
  radioCredito.setAttribute("id", "credito");
  radioCredito.setAttribute("class", "form-check-input");
  radioCredito.setAttribute("value", "credito");
  divRadio3.appendChild(radioCredito);
  let labelCredito = document.createElement("label");
  labelCredito.setAttribute("class", "form-check-label");
  labelCredito.setAttribute("for", "credito");
  labelCredito.innerHTML = "Tarjeta de Crédito";
  divRadio3.appendChild(labelCredito);
  let divTarjeta = document.createElement("div");
  divTarjeta.setAttribute("id", "tarjeta");
  fieldsetPago.appendChild(divTarjeta);
  let inputTarj = document.createElement("input");
  inputTarj.setAttribute("type", "text");
  inputTarj.setAttribute("name", "numeroTarjeta");
  inputTarj.setAttribute("placeholder", "Número de la tarjeta");
  inputTarj.setAttribute("class", "form-control");
  inputTarj.setAttribute("required", "");
  divTarjeta.appendChild(inputTarj);
  let vencimiento = document.createElement("input");
  vencimiento.setAttribute("type", "text");
  vencimiento.setAttribute("name", "vencimiento");
  vencimiento.setAttribute("placeholder", "Vencimiento");
  vencimiento.setAttribute("class", "form-control");
  vencimiento.setAttribute("required", "");
  divTarjeta.appendChild(vencimiento);
  let inputCodigo = document.createElement("input");
  inputCodigo.setAttribute("type", "password");
  inputCodigo.setAttribute("name", "codigo");
  inputCodigo.setAttribute("placeholder", "CVV");
  inputCodigo.setAttribute("class", "form-control");
  inputCodigo.setAttribute("required", "");
  divTarjeta.appendChild(inputCodigo);
  let cuotas = document.createElement("select");
  cuotas.setAttribute("name", "cuotas");
  cuotas.setAttribute("id", "cuotas");
  cuotas.setAttribute("class", "form-select");
  cuotas.attributes.required = "required";
  divTarjeta.appendChild(cuotas);
  let option1 = document.createElement("option");
  option1.setAttribute("value", "1");
  option1.innerHTML = "1 Cuota";
  cuotas.appendChild(option1);
  let option2 = document.createElement("option");
  option2.setAttribute("value", "3");
  option2.innerHTML = "3 Cuotas";
  cuotas.appendChild(option2);
  let option3 = document.createElement("option");
  option3.setAttribute("value", "6");
  option3.innerHTML = "6 Cuotas";
  cuotas.appendChild(option3);
  let option4 = document.createElement("option");
  option4.setAttribute("value", "12");
  option4.innerHTML = "12 Cuotas";
  cuotas.appendChild(option4);
  let totalResumen = document.createElement("p");
  totalResumen.setAttribute("id", "totalResumen");
  totalResumen.innerHTML = `Total $${carrito.total}`;
  fieldsetPago.appendChild(totalResumen);
  let spanTotal = document.createElement("span");
  spanTotal.setAttribute("id", "spanTotal");
  totalResumen.appendChild(spanTotal);
  let divBotones = document.createElement("div");
  divBotones.setAttribute("id", "botonesResumen");
  form.appendChild(divBotones);
  let btnCancelar = document.createElement("button");
  btnCancelar.setAttribute("class", "btn btn-outline-dark");
  btnCancelar.setAttribute("type", "button");
  btnCancelar.innerHTML = "Cancelar";
  divBotones.appendChild(btnCancelar);
  let btnFinalizar = document.createElement("button");
  btnFinalizar.setAttribute("type", "submit");
  btnFinalizar.setAttribute("class", "btn btn-dark");
  btnFinalizar.innerHTML = "Finalizar compra";
  divBotones.appendChild(btnFinalizar);
  divTarjeta.style.display = "none";
  inputTarj.disabled = true;
  inputCodigo.disabled = true;
  vencimiento.disabled = true;

  btnCancelar.onclick = function () {
    divProductos.removeChild(divBg);
  };

  fieldsetPago.addEventListener("click", () => {
    if (radioDebito.checked == true) {
      cuotas.style.display = "none";
      divTarjeta.style.display = "inline-block";
      inputTarj.disabled = false;
      inputCodigo.disabled = false;
      vencimiento.disabled = false;
    } else if (radioCredito.checked == true) {
      divTarjeta.style.display = "inline-block";
      inputTarj.disabled = false;
      inputCodigo.disabled = false;
      vencimiento.disabled = false;
      cuotas.style.display = "block";

      let valCuota;
      if (cuotas.selectedIndex == 0) {
        spanTotal.innerHTML = ` 1 Cuota de $${carrito.total}`;
      } else if (cuotas.selectedIndex == 1) {
        valCuota = Math.round(carrito.total / 3);
        spanTotal.innerHTML = ` 3 Cuotas de $${valCuota}`;
      } else if (cuotas.selectedIndex == 2) {
        valCuota = Math.round(carrito.total / 6);
        spanTotal.innerHTML = ` 6 Cuotas de $${valCuota}`;
      } else if (cuotas.selectedIndex == 3) {
        valCuota = Math.round(carrito.total / 12);
        spanTotal.innerHTML = ` 12 Cuotas de $${valCuota}`;
      }
    } else if (radioEfectivo.checked == true) {
      divTarjeta.style.display = "none";
      inputTarj.disabled = true;
      inputCodigo.disabled = true;
      vencimiento.disabled = true;
    }
  });

  let inputs = form.querySelectorAll("[required]");

  function Validar() {
    for (let input of inputs) {
      if (input.value == "") {
        input.style.borderColor = "orange";
      } else if (input.value !== "") {
        input.style.borderColor = "green";
      }
    }
  }

  btnFinalizar.onclick = Validar;

  form.onsubmit = function () {
    localStorage.clear();
    location.reload();
  };
};
