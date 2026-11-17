// Nombre y apellidos: ______________________________

import { tareasIniciales } from './datos.js';

// ============================================================
// Constantes y elementos de la página (ya definidos: no los cambies)
// ============================================================
const ESTADOS = ['porhacer', 'encurso', 'hecha'];
const LIMITE_HORAS = 40;

const formularioTarea = document.querySelector('#formulario-tarea');
const campoHoras = formularioTarea.elements.horas;
const mensajeFormulario = document.querySelector('#mensaje-formulario');
const buscador = document.querySelector('#buscador');
const botonArchivar = document.querySelector('#boton-archivar');
const tablero = document.querySelector('#tablero');
const listaHoras = document.querySelector('#horas-asignatura');
const progreso = document.querySelector('#progreso');

const columnas = {
  porhacer: document.querySelector('#col-porhacer'),
  encurso: document.querySelector('#col-encurso'),
  hecha: document.querySelector('#col-hecha')
};
const contadores = {
  porhacer: document.querySelector('#num-porhacer'),
  encurso: document.querySelector('#num-encurso'),
  hecha: document.querySelector('#num-hecha')
};

// Se desactiva la validación del navegador: los mensajes los muestras tú (apartado 1)
formularioTarea.noValidate = true;

// Tareas del tablero. Es una copia: los datos originales no se tocan
let tareas = tareasIniciales.map((tarea) => ({ ...tarea }));

// Repinta todo a partir del array de tareas (ya hecha: la usarás en el apartado 4)
const repintar = () => {
  pintarTablero(buscarTareas(tareas, buscador.value));
  pintarResumen(tareas);
};


// ============================================================
// APARTADO 1 · Formulario y validación
// ============================================================

// 1.1 · Devuelve el texto del error de un campo según su `validity` ('' si es válido)
const mensajeDeError = (campo) => {
  const validez = campo.validity;
  if (validez.valueMissing) return 'Este campo es obligatorio';
  if (validez.tooShort) return `Escribe al menos ${campo.minLength} caracteres`;
  if (validez.rangeUnderflow || validez.rangeOverflow) return `Debe estar entre ${campo.min} y ${campo.max}`;
  if (validez.customError) return campo.validationMessage;
  return '';
};

// 1.2 · Muestra u oculta el error de un campo y devuelve si es válido
const validarCampo = (campo) => {
  const error = mensajeDeError(campo);
  const salida = campo.nextElementSibling;
  if (salida?.matches('.error')) salida.textContent = error;
  campo.classList.toggle('invalido', Boolean(error));
  return !error;
};

// 1.3 · Aplica (o quita) el error personalizado de #horas según el límite de horas pendientes
const comprobarHoras = () => {
  const pendientes = tareas
    .filter((tarea) => tarea.estado !== 'hecha')
    .reduce((suma, tarea) => suma + tarea.horas, 0);
  const escritas = campoHoras.value === '' ? 0 : (campoHoras.valueAsNumber || 0);
  if (pendientes + escritas > LIMITE_HORAS) {
    campoHoras.setCustomValidity(`Superas el límite de ${LIMITE_HORAS} h pendientes (ahora hay ${pendientes} h).`);
  } else {
    campoHoras.setCustomValidity('');
  }
};

// 1.4 · Deja el formulario como recién cargado
const limpiarFormulario = () => {
  formularioTarea.reset();
  formularioTarea.querySelectorAll('input, select').forEach((campo) => {
    campo.setCustomValidity('');
    campo.classList.remove('invalido');
    const salida = campo.nextElementSibling;
    if (salida?.matches('.error')) salida.textContent = '';
  });
  mensajeFormulario.textContent = '';
};

// 1.5 · Eventos del formulario (change, input y keydown)
formularioTarea.addEventListener('change', (evento) => {
  const campo = evento.target;
  if (!campo.matches('input, select')) return;
  comprobarHoras();
  validarCampo(campo);
});

formularioTarea.addEventListener('input', (evento) => {
  const campo = evento.target;
  if (!campo.matches('input, select')) return;
  comprobarHoras();
  if (campo.classList.contains('invalido')) validarCampo(campo);
  if (campoHoras.classList.contains('invalido')) validarCampo(campoHoras);
});

formularioTarea.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') {
    evento.preventDefault();
    limpiarFormulario();
  }
});


// ============================================================
// APARTADO 2 · Cálculos con los datos (funciones puras)
// ============================================================

// 2.1 · Tareas cuyo título o asignatura contienen el texto buscado
const buscarTareas = (lista, texto) => {
  const consulta = texto.trim().toLocaleLowerCase('es');
  if (!consulta) return [...lista];
  return lista.filter((tarea) =>
    tarea.titulo.toLocaleLowerCase('es').includes(consulta)
    || tarea.asignatura.toLocaleLowerCase('es').includes(consulta)
  );
};

// 2.2 · Reparte las tareas en un objeto con una lista por cada estado
const agruparPorEstado = (lista) => {
  const grupos = { porhacer: [], encurso: [], hecha: [] };
  lista.forEach((tarea) => {
    if (grupos[tarea.estado]) grupos[tarea.estado].push(tarea);
  });
  return grupos;
};

// 2.3 · Suma las horas de cada asignatura, de más a menos horas
const horasPorAsignatura = (lista) => {
  const sumas = lista.reduce((acumulado, tarea) => {
    acumulado[tarea.asignatura] = (acumulado[tarea.asignatura] || 0) + tarea.horas;
    return acumulado;
  }, {});
  return Object.entries(sumas)
    .map(([asignatura, horas]) => ({ asignatura, horas }))
    .sort((a, b) => b.horas - a.horas || a.asignatura.localeCompare(b.asignatura, 'es'));
};


// ============================================================
// APARTADO 3 · Pintar la página
// ============================================================

// 3.1 · Devuelve (sin insertarla) la tarjeta <li> de una tarea
const crearTarjeta = (tarea) => {
  const tarjeta = document.createElement('li');
  tarjeta.className = `tarjeta prioridad-${tarea.prioridad}`;
  tarjeta.dataset.id = tarea.id;

  const titulo = document.createElement('strong');
  titulo.className = 'titulo';
  titulo.textContent = tarea.titulo;
  const meta = document.createElement('span');
  meta.className = 'meta';
  meta.textContent = `${tarea.asignatura} · ${tarea.horas} h`;
  const retroceder = document.createElement('button');
  retroceder.type = 'button';
  retroceder.dataset.accion = 'retroceder';
  retroceder.textContent = '←';
  retroceder.setAttribute('aria-label', `Retroceder ${tarea.titulo}`);
  retroceder.disabled = ESTADOS.indexOf(tarea.estado) === 0;
  const avanzar = document.createElement('button');
  avanzar.type = 'button';
  avanzar.dataset.accion = 'avanzar';
  avanzar.textContent = '→';
  avanzar.setAttribute('aria-label', `Avanzar ${tarea.titulo}`);
  avanzar.disabled = ESTADOS.indexOf(tarea.estado) === ESTADOS.length - 1;

  tarjeta.append(titulo, meta, retroceder, avanzar);
  return tarjeta;
};

// 3.2 · Reparte las tarjetas de lista en las tres columnas y actualiza los contadores
const pintarTablero = (lista) => {
  const grupos = agruparPorEstado(lista);
  ESTADOS.forEach((estado) => {
    const columna = columnas[estado];
    columna.replaceChildren();
    grupos[estado].forEach((tarea) => columna.append(crearTarjeta(tarea)));
    contadores[estado].textContent = grupos[estado].length;
  });
};

// 3.3 · Pinta el resumen: horas por asignatura y progreso
const pintarResumen = (lista) => {
  listaHoras.replaceChildren();
  horasPorAsignatura(lista).forEach(({ asignatura, horas }) => {
    const elemento = document.createElement('li');
    elemento.textContent = `${asignatura} — ${horas} h`;
    listaHoras.append(elemento);
  });
  const hechas = lista.filter((tarea) => tarea.estado === 'hecha').length;
  const porcentaje = lista.length ? Math.round((hechas / lista.length) * 100) : 0;
  progreso.textContent = `Hechas: ${hechas} de ${lista.length} (${porcentaje} %)`;
};


// ============================================================
// APARTADO 4 · Interacción
// ============================================================

// 4.1 · Mueve una tarea `paso` columnas (+1 avanza, -1 retrocede)
const moverTarea = (id, paso) => {
  const tarea = tareas.find((elemento) => elemento.id === Number(id));
  if (!tarea) return;
  const posicion = ESTADOS.indexOf(tarea.estado);
  const destino = posicion + paso;
  if (destino < 0 || destino >= ESTADOS.length) return;
  tarea.estado = ESTADOS[destino];
};

// 4.2 · Añade una tarea nueva al array y la devuelve
const anadirTarea = (datos) => {
  const id = tareas.reduce((mayor, tarea) => Math.max(mayor, tarea.id), 0) + 1;
  const nuevaTarea = {
    id,
    titulo: datos.titulo,
    asignatura: datos.asignatura,
    horas: datos.horas,
    estado: 'porhacer',
    prioridad: datos.prioridad
  };
  tareas.push(nuevaTarea);
  return nuevaTarea;
};

// 4.3 · Elimina del array las tareas hechas y devuelve cuántas eran
const archivarHechas = () => {
  const cantidad = tareas.filter((tarea) => tarea.estado === 'hecha').length;
  tareas = tareas.filter((tarea) => tarea.estado !== 'hecha');
  return cantidad;
};

// 4.4 · Eventos del tablero, del buscador y del botón «Archivar hechas», y primer pintado
tablero.addEventListener('click', (evento) => {
  const boton = evento.target.closest('button[data-accion]');
  if (!boton || !tablero.contains(boton)) return;
  const tarjeta = boton.closest('[data-id]');
  if (!tarjeta) return;
  moverTarea(tarjeta.dataset.id, boton.dataset.accion === 'avanzar' ? 1 : -1);
  repintar();
});

buscador.addEventListener('input', repintar);
botonArchivar.addEventListener('click', () => {
  const archivadas = archivarHechas();
  mensajeFormulario.textContent = `Tareas archivadas: ${archivadas}`;
  repintar();
});
repintar();

// 4.5 · Envío del formulario
formularioTarea.addEventListener('submit', (evento) => {
  evento.preventDefault();
  mensajeFormulario.textContent = '';
  comprobarHoras();
  const campos = Array.from(formularioTarea.querySelectorAll('input, select'));
  const validos = campos.map(validarCampo);
  const primeroInvalido = campos.find((campo, indice) => !validos[indice]);
  if (primeroInvalido) {
    primeroInvalido.focus();
    return;
  }

  const titulo = formularioTarea.elements.titulo.value.trim();
  anadirTarea({
    titulo,
    asignatura: formularioTarea.elements.asignatura.value,
    horas: campoHoras.valueAsNumber,
    prioridad: formularioTarea.elements.prioridad.value
  });
  limpiarFormulario();
  mensajeFormulario.textContent = `Tarea añadida: ${titulo}`;
  repintar();
});
