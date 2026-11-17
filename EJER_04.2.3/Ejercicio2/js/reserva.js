import { mostrarError, limpiarErrores } from './validaciones.js';

const formulario = document.getElementById('reserva');
const total = document.getElementById('total');
const contador = document.getElementById('contador');
const resultado = document.getElementById('resultado');
formulario.noValidate = true;

const precios = { individual: 40, doble: 60, familiar: 90 };
function nochesReserva() {
  if (!formulario.elements.entrada.value || !formulario.elements.salida.value) return 0;
  return Math.max(0, Math.ceil((new Date(formulario.elements.salida.value) - new Date(formulario.elements.entrada.value)) / 86400000));
}
function comprobarReglas() {
  const entrada = formulario.elements.entrada;
  const salida = formulario.elements.salida;
  const a = entrada.value ? new Date(entrada.value) : null;
  const b = salida.value ? new Date(salida.value) : null;
  salida.setCustomValidity(a && b && b <= a ? 'La salida debe ser posterior a la entrada.' : '');
  const actividades = formulario.elements.actividades;
  actividades.setCustomValidity(actividades.selectedOptions.length > 3 ? 'Puedes elegir como máximo 3 actividades.' : '');
}
function actualizarTotal() {
  const habitacion = precios[formulario.elements.habitacion.value] || 0;
  const extras = Array.from(formulario.querySelectorAll('input[name="extras"]:checked'), casilla => Number(casilla.dataset.precio)).reduce((suma, precio) => suma + precio, 0);
  const totalEuros = (habitacion + extras * (Number(formulario.elements.personas.value) || 0)) * nochesReserva();
  total.textContent = `Total estimado: ${totalEuros.toFixed(2)} €`;
}
function actualizarContador() { contador.textContent = `${formulario.elements.comentarios.value.length}/120`; }

formulario.addEventListener('focusout', event => {
  if (!event.target.matches('input, select, textarea')) return;
  comprobarReglas();
  mostrarError(event.target);
});
formulario.addEventListener('input', event => {
  if (!event.target.matches('input, select, textarea')) return;
  comprobarReglas();
  mostrarError(event.target);
  actualizarTotal();
  actualizarContador();
});
formulario.addEventListener('change', event => {
  if (!event.target.matches('input, select, textarea')) return;
  comprobarReglas();
  mostrarError(event.target);
  actualizarTotal();
});
formulario.addEventListener('invalid', event => mostrarError(event.target), true);
formulario.addEventListener('submit', event => {
  event.preventDefault();
  comprobarReglas();
  if (!formulario.checkValidity()) {
    formulario.querySelector('input:invalid, select:invalid, textarea:invalid')?.focus();
    return;
  }
  const datos = new FormData(formulario);
  const extras = datos.getAll('extras');
  resultado.textContent = `Reserva para ${datos.get('nombre')}\nTeléfono: ${datos.get('telefono')}\nPersonas: ${datos.get('personas')}\nEntrada: ${datos.get('entrada')}\nSalida: ${datos.get('salida')}\nHabitación: ${datos.get('habitacion')}\nActividades: ${datos.getAll('actividades').join(', ')}\nExtras: ${extras.length ? extras.join(', ') : 'ninguno'}\nComentarios: ${datos.get('comentarios')}\n${total.textContent}`;
});
formulario.addEventListener('reset', () => {
  limpiarErrores(formulario);
  resultado.textContent = '';
  total.textContent = 'Total estimado: 0.00 €';
  contador.textContent = '0/120';
});
actualizarTotal();
