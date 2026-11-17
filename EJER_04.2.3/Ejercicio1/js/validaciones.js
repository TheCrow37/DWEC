const mensajes = {
  valueMissing(campo) {
    if (campo.type === 'checkbox') return 'Debes marcar esta casilla.';
    if (campo.type === 'radio') return 'Selecciona una opción.';
    if (campo.tagName === 'SELECT') return 'Selecciona una opción de la lista.';
    return 'Completa este campo.';
  },
  typeMismatch(campo) {
    if (campo.type === 'email') return 'Escribe una dirección de correo válida.';
    if (campo.type === 'url') return 'Escribe una dirección web válida.';
    return 'El formato no es válido.';
  },
  patternMismatch: campo => campo.title || 'El formato no es válido.',
  tooShort: campo => `Escribe al menos ${campo.minLength} caracteres.`,
  tooLong: campo => `Escribe como máximo ${campo.maxLength} caracteres.`,
  rangeUnderflow: campo => `El valor debe ser igual o superior a ${campo.min}.`,
  rangeOverflow: campo => `El valor debe ser igual o inferior a ${campo.max}.`,
  badInput: () => 'Introduce un valor válido.'
};
const causas = Object.keys(mensajes);

export function mensajeError(campo) {
  if (campo.validity.customError) return campo.validationMessage;
  const causa = causas.find(clave => campo.validity[clave]);
  return causa ? mensajes[causa](campo) : '';
}

export function mostrarError(campo) {
  const valido = campo.validity.valid;
  const salida = document.getElementById(`error-${campo.name}`);
  if (salida) salida.textContent = mensajeError(campo);
  campo.classList.toggle('con-error', !valido);
  campo.setAttribute('aria-invalid', String(!valido));
  return valido;
}

export function validarFormulario(formulario) {
  const campos = [...formulario.querySelectorAll('input, select, textarea')];
  let primero = null;
  for (const campo of campos) {
    if (!mostrarError(campo) && !primero) primero = campo;
  }
  if (primero) primero.focus();
  return !primero;
}

export function limpiarErrores(formulario) {
  formulario.querySelectorAll('input, select, textarea').forEach(campo => {
    campo.setCustomValidity('');
    campo.classList.remove('con-error');
    campo.removeAttribute('aria-invalid');
  });
  formulario.querySelectorAll('.error').forEach(error => { error.textContent = ''; });
}
