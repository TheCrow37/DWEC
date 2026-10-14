// 24. Añadir el prefijo [CURSO] a todos los h2 de las tarjetas.
document.querySelectorAll('#lista-cursos .card h2').forEach(titulo => {
  if (!titulo.textContent.startsWith('[CURSO]')) titulo.textContent = `[CURSO] ${titulo.textContent}`;
});
