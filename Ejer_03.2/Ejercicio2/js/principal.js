const listaFaq = document.getElementById('faq');
function ocultarTodasLasRespuestas() {
  document.querySelectorAll('#faq p').forEach(respuesta => respuesta.classList.add('oculto'));
}
function revelarRespuesta(pregunta) {
  ocultarTodasLasRespuestas();
  pregunta.nextElementSibling?.classList.remove('oculto');
}
listaFaq.addEventListener('click', evento => {
  const pregunta = evento.target.closest('h2');
  if (pregunta && listaFaq.contains(pregunta)) revelarRespuesta(pregunta);
});
