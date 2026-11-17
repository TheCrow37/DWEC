const formulario = document.getElementById('formulario-tareas');
const entrada = document.getElementById('nueva-tarea');
const tareas = document.getElementById('tareas');
formulario.addEventListener('submit', evento => {
  evento.preventDefault();
  const texto = entrada.value.trim();
  if (!texto) return;
  const tarea = document.createElement('li');
  const descripcion = document.createElement('span'); descripcion.textContent = texto;
  const boton = document.createElement('button'); boton.type = 'button'; boton.dataset.accion = 'eliminar'; boton.textContent = 'Eliminar';
  tarea.append(descripcion, ' ', boton); tareas.append(tarea);
  formulario.reset(); entrada.focus();
});
tareas.addEventListener('click', evento => {
  if (evento.target.closest('button[data-accion="eliminar"]')) evento.target.closest('button').parentNode.remove();
});
