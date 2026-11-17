const formulario = document.getElementById('formulario-notas');
const campoAlumno = formulario.elements.alumno;
const campoNota = formulario.elements.nota;
const vistaPrevia = document.getElementById('vista-previa');
const cabecera = document.querySelector('#tabla thead');
const cuerpo = document.querySelector('#tabla tbody');
const resumen = document.getElementById('resumen');

let alumnos = [];
let siguienteId = 1;
let columnaOrden = '';
let direccionOrden = 1;

const escaparHTML = texto => texto.replace(/[&<>"']/g, caracter => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[caracter]);

function pintar() {
  cuerpo.innerHTML = alumnos.map(alumno => `
    <tr data-id="${alumno.id}">
      <td>${escaparHTML(alumno.alumno)}</td>
      <td class="${alumno.nota >= 5 ? 'aprobado' : 'suspenso'}">${alumno.nota}</td>
      <td><button type="button" data-accion="borrar">Borrar</button></td>
    </tr>`).join('');

  if (alumnos.length === 0) {
    resumen.textContent = 'Sin alumnos';
    return;
  }
  const media = alumnos.reduce((suma, alumno) => suma + alumno.nota, 0) / alumnos.length;
  const mejor = alumnos.reduce((actual, alumno) => alumno.nota > actual.nota ? alumno : actual);
  const aprobados = alumnos.filter(alumno => alumno.nota >= 5).length;
  const todosAprueban = alumnos.every(alumno => alumno.nota >= 5);
  resumen.textContent = `Media: ${media.toFixed(2)} · Mejor: ${mejor.alumno} (${mejor.nota}) · Aprobados: ${aprobados}/${alumnos.length} · ¿Todos aprueban?: ${todosAprueban ? 'sí' : 'no'}`;
}

campoNota.addEventListener('input', () => {
  if (campoNota.value === '') {
    vistaPrevia.textContent = '';
    vistaPrevia.className = '';
    return;
  }
  const aprobado = campoNota.valueAsNumber >= 5;
  vistaPrevia.textContent = aprobado ? 'Aprobado' : 'Suspenso';
  vistaPrevia.className = aprobado ? 'aprobado' : 'suspenso';
});

formulario.addEventListener('submit', evento => {
  evento.preventDefault();
  alumnos.push({ id: siguienteId++, alumno: campoAlumno.value.trim(), nota: campoNota.valueAsNumber });
  formulario.reset();
  vistaPrevia.textContent = '';
  vistaPrevia.className = '';
  campoAlumno.focus();
  pintar();
});

cuerpo.addEventListener('click', evento => {
  const boton = evento.target.closest('button[data-accion="borrar"]');
  if (!boton || !cuerpo.contains(boton)) return;
  const id = Number(boton.closest('tr').dataset.id);
  alumnos = alumnos.filter(alumno => alumno.id !== id);
  pintar();
});

cabecera.addEventListener('click', evento => {
  const th = evento.target.closest('th[data-orden]');
  if (!th || !cabecera.contains(th)) return;
  const nuevaColumna = th.dataset.orden;
  direccionOrden = columnaOrden === nuevaColumna ? -direccionOrden : 1;
  columnaOrden = nuevaColumna;
  alumnos.sort((a, b) => {
    const comparacion = nuevaColumna === 'alumno'
      ? a.alumno.localeCompare(b.alumno, 'es')
      : a.nota - b.nota;
    return comparacion * direccionOrden;
  });
  pintar();
});

pintar();
