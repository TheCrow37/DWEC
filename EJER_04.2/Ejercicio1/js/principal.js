const formulario = document.getElementById('formulario-compra');
const buscador = document.getElementById('buscador');
const lista = document.getElementById('lista');
const salidaTotal = document.getElementById('total');

let productos = [];
let siguienteId = 1;

const calcularTotal = () => productos.reduce((suma, producto) => suma + producto.precio * producto.unidades, 0);

function pintar() {
  const consulta = buscador.value.trim().toLocaleLowerCase('es');
  const visibles = productos.filter(producto => producto.nombre.toLocaleLowerCase('es').includes(consulta));
  lista.innerHTML = visibles.map(producto => `
    <li data-id="${producto.id}">
      ${producto.nombre}: ${producto.unidades} x${producto.precio.toFixed(2)} €
      <button type="button" data-accion="restar" aria-label="Restar una unidad de ${producto.nombre}">-</button>
      <button type="button" data-accion="sumar" aria-label="Añadir una unidad de ${producto.nombre}">+</button>
      <button type="button" data-accion="borrar">Borrar</button>
    </li>`).join('');
  salidaTotal.textContent = `Total: ${calcularTotal().toFixed(2)} €`;
}

formulario.addEventListener('submit', evento => {
  evento.preventDefault();
  const nombre = formulario.elements.producto.value.trim();
  const precio = formulario.elements.precio.valueAsNumber;
  const unidades = formulario.elements.unidades.valueAsNumber;
  const existente = productos.find(producto => producto.nombre.toLocaleLowerCase('es') === nombre.toLocaleLowerCase('es'));

  if (existente) {
    existente.unidades += unidades;
  } else {
    productos.push({ id: siguienteId++, nombre, precio, unidades });
  }

  formulario.reset();
  formulario.elements.producto.focus();
  pintar();
});

lista.addEventListener('click', evento => {
  const boton = evento.target.closest('button[data-accion]');
  if (!boton || !lista.contains(boton)) return;
  const fila = boton.closest('li');
  const id = Number(fila.dataset.id);
  const acciones = {
    sumar: producto => { producto.unidades++; },
    restar: producto => { producto.unidades = Math.max(1, producto.unidades - 1); },
    borrar: () => { productos = productos.filter(producto => producto.id !== id); }
  };
  const producto = productos.find(elemento => elemento.id === id);
  if (boton.dataset.accion === 'borrar') acciones.borrar();
  else acciones[boton.dataset.accion]?.(producto);
  pintar();
});

buscador.addEventListener('input', pintar);
formulario.addEventListener('focusin', evento => {
  if (evento.target.matches('input')) evento.target.classList.add('activo');
});
formulario.addEventListener('focusout', evento => {
  if (evento.target.matches('input')) evento.target.classList.remove('activo');
});

pintar();
