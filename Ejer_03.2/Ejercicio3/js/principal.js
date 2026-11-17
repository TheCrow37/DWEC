const formulario = document.getElementById('formulario');
const informe = document.getElementById('informe-errores');
function generarInformeDeValidacion() {
  const nombre = formulario.elements.nombre.value.trim();
  const email = formulario.elements.email.value.trim();
  informe.replaceChildren();
  const errores = [];
  if (nombre.length <= 3) errores.push('El nombre debe tener más de 3 caracteres.');
  if (!email.includes('@')) errores.push('El email es incorrecto: debe contener @.');
  if (errores.length) errores.forEach(texto => { const parrafo = document.createElement('p'); parrafo.textContent = texto; informe.append(parrafo); });
  else { const correcto = document.createElement('p'); correcto.textContent = 'Formulario válido'; informe.append(correcto); }
}
formulario.addEventListener('submit', evento => { evento.preventDefault(); generarInformeDeValidacion(); });
