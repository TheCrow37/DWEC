import { mostrarError, validarFormulario, limpiarErrores } from './validaciones.js';

const formulario = document.getElementById('registro');
const resultado = document.getElementById('resultado');
formulario.noValidate = true;

['España', 'Francia', 'Italia', 'Portugal'].forEach((pais, i) => {
  formulario.elements.pais.add(new Option(pais, ['ES', 'FR', 'IT', 'PT'][i]));
});
const hoy = new Date();
formulario.elements.nacimiento.max = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`;

function comprobarReglas() {
  const correo = formulario.elements.correo;
  const correo2 = formulario.elements.correo2;
  const clave = formulario.elements.clave;
  const clave2 = formulario.elements.clave2;
  const nacimiento = formulario.elements.nacimiento;
  correo2.setCustomValidity(correo2.value && correo2.value !== correo.value ? 'Los correos electrónicos no coinciden.' : '');
  clave2.setCustomValidity(clave2.value && clave2.value !== clave.value ? 'Las contraseñas no coinciden.' : '');
  let edad = -1;
  if (nacimiento.value) {
    const fecha = new Date(nacimiento.value);
    const ahora = new Date();
    edad = ahora.getFullYear() - fecha.getFullYear();
    if (ahora.getMonth() < fecha.getMonth() || (ahora.getMonth() === fecha.getMonth() && ahora.getDate() < fecha.getDate())) edad--;
  }
  nacimiento.setCustomValidity(nacimiento.value && edad < 18 ? 'Debes tener al menos 18 años.' : '');
}

formulario.addEventListener('focusout', event => {
  if (!event.target.matches('input, select, textarea')) return;
  comprobarReglas();
  mostrarError(event.target);
});
formulario.addEventListener('input', event => {
  if (!event.target.matches('input, select, textarea')) return;
  comprobarReglas();
  mostrarError(event.target);
  if (formulario.elements.correo2.value) mostrarError(formulario.elements.correo2);
  if (formulario.elements.clave2.value) mostrarError(formulario.elements.clave2);
  if (formulario.elements.nacimiento.value) mostrarError(formulario.elements.nacimiento);
});
formulario.addEventListener('change', event => {
  if (event.target.matches('select, input[type=radio], input[type=checkbox]')) {
    comprobarReglas();
    mostrarError(event.target);
  }
});
formulario.addEventListener('submit', event => {
  event.preventDefault();
  comprobarReglas();
  if (validarFormulario(formulario)) resultado.textContent = 'Registro completado correctamente.';
});
formulario.addEventListener('reset', () => {
  limpiarErrores(formulario);
  resultado.textContent = '';
});
