// ==========================================================
// EJER_04.1 · Eventos en JavaScript
// Escribe aquí tus soluciones (módulo ES6).
// - Nombres de variables y funciones en español.
// - Usa addEventListener (no onclick en el HTML).
// ==========================================================

// ---------- Ejercicio 1 · Contador de clics ----------
const valorContador = document.getElementById('valor-contador');
let cuenta = 0;
function actualizarContadorClics() {
  valorContador.textContent = cuenta;
  valorContador.style.color = cuenta < 0 ? 'red' : '';
}
document.getElementById('boton-sumar').addEventListener('click', () => { cuenta++; actualizarContadorClics(); });
document.getElementById('boton-restar').addEventListener('click', () => { cuenta--; actualizarContadorClics(); });
document.getElementById('boton-reiniciar').addEventListener('click', () => { cuenta = 0; actualizarContadorClics(); });

// ---------- Ejercicio 2 · Tarjeta sensible al ratón ----------
const tarjetaRaton = document.getElementById('tarjeta-raton');
const mensajeRaton = document.getElementById('mensaje-raton');
tarjetaRaton.addEventListener('mouseenter', () => {
  tarjetaRaton.classList.add('activa');
  mensajeRaton.textContent = '¡Estás dentro!';
});
tarjetaRaton.addEventListener('mouseleave', () => {
  tarjetaRaton.classList.remove('activa');
  mensajeRaton.textContent = 'Pasa el ratón por la tarjeta';
});
tarjetaRaton.addEventListener('dblclick', () => { tarjetaRaton.textContent = '¡Doble clic!'; });

// ---------- Ejercicio 3 · Espejo de texto ----------
const campoTexto = document.getElementById('campo-texto');
const ecoTexto = document.getElementById('eco-texto');
const restantes = document.getElementById('caracteres-restantes');
campoTexto.addEventListener('input', () => {
  ecoTexto.textContent = campoTexto.value;
  const cantidad = 30 - campoTexto.value.length;
  restantes.textContent = cantidad;
  restantes.classList.toggle('poco', cantidad <= 5);
});

// ---------- Ejercicio 4 · Mover con el teclado ----------
const areaJuego = document.getElementById('area-juego');
const cuadrado = document.getElementById('cuadrado');
const posicionCuadrado = document.getElementById('posicion-cuadrado');
let x = 0;
let y = 0;
function moverCuadrado() {
  const maxX = areaJuego.clientWidth - cuadrado.offsetWidth;
  const maxY = areaJuego.clientHeight - cuadrado.offsetHeight;
  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));
  cuadrado.style.left = `${x}px`;
  cuadrado.style.top = `${y}px`;
  posicionCuadrado.textContent = `Posición: (${x}, ${y})`;
}
document.addEventListener('keydown', event => {
  const movimientos = { ArrowUp: [0, -10], ArrowDown: [0, 10], ArrowLeft: [-10, 0], ArrowRight: [10, 0] };
  if (event.key === ' ') { x = 0; y = 0; moverCuadrado(); return; }
  if (!movimientos[event.key]) return;
  event.preventDefault();
  x += movimientos[event.key][0];
  y += movimientos[event.key][1];
  moverCuadrado();
});

// ---------- Ejercicio 5 · Paleta de colores ----------
const paleta = document.getElementById('paleta');
const lienzo = document.getElementById('lienzo');
const nombreColor = document.getElementById('nombre-color');
paleta.addEventListener('click', event => {
  const muestra = event.target.closest('.muestra');
  if (!muestra || !paleta.contains(muestra)) return;
  lienzo.style.backgroundColor = muestra.getAttribute('data-color');
  nombreColor.textContent = muestra.getAttribute('data-nombre');
});

// ---------- Ejercicio 6 · Grupo con foco ----------
const grupoContacto = document.getElementById('grupo-contacto');
const mensajeFoco = document.getElementById('mensaje-foco');
grupoContacto.addEventListener('focusin', event => {
  if (!event.target.matches('input')) return;
  grupoContacto.classList.add('activo');
  mensajeFoco.textContent = `Editando: ${event.target.placeholder}`;
});
grupoContacto.addEventListener('focusout', event => {
  if (grupoContacto.contains(event.relatedTarget)) return;
  grupoContacto.classList.remove('activo');
  mensajeFoco.textContent = 'Ningún campo activo';
});

// ---------- Ejercicio 7 · Burbuja y captura ----------
const registroFlujo = document.getElementById('registro-flujo');
const cajas = [
  ['caja-externa', 'Externa'],
  ['caja-media', 'Media'],
  ['caja-interna', 'Interna']
];
function registrarFlujo(nombre, fase) {
  const linea = document.createElement('li');
  linea.textContent = `${nombre}${fase ? ' (captura)' : ''}`;
  registroFlujo.append(linea);
}
// Predicción al pulsar Interna: captura Externa→Media→Interna; burbuja Interna→Media→Externa.
cajas.forEach(([id, nombre]) => {
  const caja = document.getElementById(id);
  caja.addEventListener('click', () => registrarFlujo(nombre, false));
  caja.addEventListener('click', () => registrarFlujo(nombre, true), true);
});
document.getElementById('boton-limpiar-flujo').addEventListener('click', () => { registroFlujo.replaceChildren(); });

// ---------- Ejercicio 8 · Detener y cancelar ----------
const tarjetaProducto = document.getElementById('tarjeta-producto');
const botonComprar = document.getElementById('boton-comprar');
const enlaceInfo = document.getElementById('enlace-info');
const mensajeEstado = document.getElementById('mensaje-estado');
function anadirEstado(texto) {
  mensajeEstado.textContent += `${mensajeEstado.textContent ? '\n' : ''}${texto}`;
}
tarjetaProducto.addEventListener('click', () => anadirEstado('Has pulsado la tarjeta'));
botonComprar.addEventListener('click', event => {
  event.stopPropagation();
  anadirEstado('Producto comprado');
});
enlaceInfo.addEventListener('click', event => {
  event.preventDefault();
  event.stopPropagation();
  anadirEstado('Enlace bloqueado');
});
